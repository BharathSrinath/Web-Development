#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

#define BLOCK_SIZE 512

typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    // Check command-line argument
    if (argc != 2)
    {
        printf("Usage: ./recover IMAGE\n");
        return 1;
    }

    // Open the forensic image
    FILE *raw_file = fopen(argv[1], "r");
    if (raw_file == NULL)
    {
        printf("Could not open forensic image.\n");
        return 1;
    }

    BYTE buffer[BLOCK_SIZE]; // Buffer to read blocks of data
    int image_count = 0;     // Counter for recovered images
    FILE *output = NULL;     // File pointer for output image

    while (fread(buffer, 1, BLOCK_SIZE, raw_file) == BLOCK_SIZE)
    {
        // Check for start of a new JPEG
        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0)
        {
            // Close previous output file
            if (output != NULL)
            {
                fclose(output);
            }

            // Create new output file
            char filename[8]; // ###.jpg\0
            sprintf(filename, "%03d.jpg", image_count);
            output = fopen(filename, "w");
            if (output == NULL)
            {
                fclose(raw_file);
                printf("Could not create image file.\n");
                return 1;
            }

            image_count++;
        }

        // Write data to output file
        if (output != NULL)
        {
            fwrite(buffer, 1, BLOCK_SIZE, output);
        }
    }

    // Close the last output file
    if (output != NULL)
    {
        fclose(output);
    }

    // Close the forensic image
    fclose(raw_file);

    return 0;
}
