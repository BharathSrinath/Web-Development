#include <getopt.h>
#include <stdio.h>
#include <stdlib.h>

#include "helpers.h"

int main(int argc, char *argv[])
{
    // Define allowable filters
    char *filters = "bgrs";

    // Get filter flag and check validity
    char filter = getopt(argc, argv, filters);
    // getopt function is used to parse command-line arguments.
    // It helps a program understand and process the options (often specified with dashes, like -a or --verbose) provided when the
    // program is run from the command line.
    // Syntax for getopt
        // int getopt(int argc, char *const argv[], const char *optstring);
        // optstring: It is a string containing the valid options that the program accepts (bgrs).
        // Each character in this string represents a valid option (b,g,r,s).
            // Generally you will need an array to go through each character, but getopt doesn't need one.
            // The getopt function will move to the next option character found in the command-line arguments. We are talking only about the options and not about the fileaname. If there are no more options, it will be keep returning the respective character back to the function. Once it reaches the end where there are no more options are left to parsed, it returns -1.
            // Our program has an if logic where by if doesnt return -1, the user has entered too many options (we need only one)
        // If a character is followed by a colon :, it indicates that the option requires an argument. (We havent made use of this feature in our program)

    if (filter == '?')
    {
        printf("Invalid filter.\n");
        return 1;
    }
    // getopt returns a question mark when you enter an option that is not recognisable. (That is not a part of bgrs in this case)

    // Ensure only one filter
    if (getopt(argc, argv, filters) != -1)
    {
        printf("Only one filter allowed.\n");
        return 2;
    }
    //  See here with "char filter = getopt(argc, argv, filters);" you are already calling getopt function once. This will return the first option character it encounters. If that option is invalid the first if condition will exit the program. If it satisfies the first if, it will move to the second if and checks for the next return value. If there is additional option provided by the user, it will return that value (Which will not be equal to -1) suggesting that there are more filter options provided. Hence the condition will be satisfied and exits the program.

    // Ensure proper usage
    if (argc != optind + 2)
    {
        printf("Usage: ./filter [flag] infile outfile\n");
        return 3;
    }
    // optind is a variable that is used by the getopt function to keep track of the index of the next argument to be processed from the argv array.
    // It is already declared in the <unistd.h> header file which inturn comes under <getopt.h>, which is included when you use the getopt function.
    // It is an integer datatype
    // After getopt has finished processing all of the option characters, optind will be set to the index of the first non-option element in the argv array. This means that argv[optind] will be the first non-option argument, which in this case would be the input filename.
    // optind by default will have a value of 1
    // In this condition we are checking if there are exactly two non-option arguments provided in the command line => input file and output file.

    // Remember filenames
    char *infile = argv[optind];
    char *outfile = argv[optind + 1];

    // Open input file
    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        printf("Could not open %s.\n", infile);
        return 4;
    }

    // Open output file
    FILE *outptr = fopen(outfile, "w");
    if (outptr == NULL)
    {
        fclose(inptr);
        printf("Could not create %s.\n", outfile);
        return 5;
    }

    // Read infile's BITMAPFILEHEADER
    BITMAPFILEHEADER bf;
    fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);

    // Read infile's BITMAPINFOHEADER
    BITMAPINFOHEADER bi;
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);

    // Ensure infile is (likely) a 24-bit uncompressed BMP 4.0
    if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 || bi.biBitCount != 24 || bi.biCompression != 0)
    {
        fclose(outptr);
        fclose(inptr);
        printf("Unsupported file format.\n");
        return 6;
    }

    // Get image's dimensions
    int height = abs(bi.biHeight);
    int width = bi.biWidth;

    // Allocate memory for image
    RGBTRIPLE(*image)[width] = calloc(height, width * sizeof(RGBTRIPLE));
    if (image == NULL)
    {
        printf("Not enough memory to store image.\n");
        fclose(outptr);
        fclose(inptr);
        return 7;
    }

    // Determine padding for scanlines
    int padding = (4 - (width * sizeof(RGBTRIPLE)) % 4) % 4;

    // Iterate over infile's scanlines
    for (int i = 0; i < height; i++)
    {
        // Read row into pixel array
        fread(image[i], sizeof(RGBTRIPLE), width, inptr);

        // Skip over padding
        fseek(inptr, padding, SEEK_CUR);
    }

    // Filter image
    switch (filter)
    {
        // Blur
        case 'b':
            blur(height, width, image);
            break;

        // Grayscale
        case 'g':
            grayscale(height, width, image);
            break;

        // Reflection
        case 'r':
            reflect(height, width, image);
            break;

        // Sepia
        case 's':
            sepia(height, width, image);
            break;
    }

    // Write outfile's BITMAPFILEHEADER
    fwrite(&bf, sizeof(BITMAPFILEHEADER), 1, outptr);

    // Write outfile's BITMAPINFOHEADER
    fwrite(&bi, sizeof(BITMAPINFOHEADER), 1, outptr);

    // Write new pixels to outfile
    for (int i = 0; i < height; i++)
    {
        // Write row to outfile
        fwrite(image[i], sizeof(RGBTRIPLE), width, outptr);

        // Write padding at end of row
        for (int k = 0; k < padding; k++)
        {
            fputc(0x00, outptr);
        }
    }

    // Free memory for image
    free(image);

    // Close files
    fclose(inptr);
    fclose(outptr);
    return 0;
}
