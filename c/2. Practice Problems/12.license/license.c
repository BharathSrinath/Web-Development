#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    // Check for command line args
    if (argc != 2)
    {
        printf("Usage: ./read infile\n");
        return 1;
    }

    // Create buffer to read into
    char buffer[7];

    // Create array to store plate numbers
    char *plates[8];

    FILE *infile = fopen(argv[1], "r");

    int idx = 0;

    while (fread(buffer, 1, 7, infile) == 7)
    // As long as freads reads 7 bytes to buffer from infile, this loop will be considered true
    {
        // Replace '\n' with '\0'
        buffer[6] = '\0';

        // Save plate number in array
        plates[idx] = malloc(7);
        strcpy(plates[idx], buffer);
        idx++;
        // You have changed the following code to above. Initially you had the same plate number repeated 8 times.
        // All elements in the plates array were pointing to the same memory location, which is why we are getting repeated output.
        // plates[idx] = buffer;
        // idx++;
    }

    for (int i = 0; i < 8; i++)
    {
        printf("%s\n", plates[i]);
    }

    for (int i = 0; i < idx; i++) // Loop up to the number of plates read
    {
        free(plates[i]); // Free allocated memory for each plate
    }
    fclose(infile);
}
