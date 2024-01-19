#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "wav.h"

int check_format(WAVHEADER header);
int get_block_size(WAVHEADER header);

int main(int argc, char *argv[])
{
    // Ensure proper usage
    if (argc != 3)
    {
        printf("Usage: %s input.wav output.wav\n", argv[0]);
        return 1;
    }

    // Open input file for reading
    FILE *input_file = fopen(argv[1], "rb");
    if (input_file == NULL)
    {
        printf("Could not open input file.\n");
        return 1;
    }

    // Read header
    WAVHEADER header;
    fread(&header, sizeof(WAVHEADER), 1, input_file);

    // Use check_format to ensure WAV format
    if (!check_format(header))
    {
        printf("Input is not a WAV file.\n");
        fclose(input_file);
        return 1;
    }

    // Open output file for writing
    FILE *output_file = fopen(argv[2], "wb");
    if (output_file == NULL)
    {
        printf("Could not create output file.\n");
        fclose(input_file);
        return 1;
    }

    // Write header to file
    fwrite(&header, sizeof(WAVHEADER), 1, output_file);

    // Use get_block_size to calculate size of block
    int block_size = get_block_size(header);

    // Calculate number of blocks in the file
    int num_blocks = header.subchunk2Size / block_size;

    // Reversed audio buffer
    uint8_t *audio_buffer = malloc(block_size);

    // Write reversed audio to file
    for (int i = num_blocks - 1; i >= 0; i--)
    {
        fseek(input_file, sizeof(WAVHEADER) + i * block_size, SEEK_SET);
        fread(audio_buffer, 1, block_size, input_file);
        fwrite(audio_buffer, 1, block_size, output_file);
    }

    // Cleanup
    fclose(input_file);
    fclose(output_file);
    free(audio_buffer);

    return 0;
}

int check_format(WAVHEADER header)
{
    // Check if the format is "WAVE"
    return memcmp(header.format, "WAVE", 4) == 0;
}

int get_block_size(WAVHEADER header)
{
    // Calculate block size in bytes (channels * bits per sample / 8)
    return (header.numChannels * header.bitsPerSample) / 8;
}
