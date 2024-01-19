#include "helpers.h"
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            BYTE gray = round((image[i][j].rgbtRed + image[i][j].rgbtGreen + image[i][j].rgbtBlue) / 3.0);
            image[i][j].rgbtRed = gray;
            image[i][j].rgbtGreen = gray;
            image[i][j].rgbtBlue = gray;
        }
    }
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width / 2; j++)
        {
            RGBTRIPLE temp = image[i][j];
            image[i][j] = image[i][width - 1 - j];
            image[i][width - 1 - j] = temp;
        }
    }
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE temp[height][width]; // Temporary array to store blurred pixels

    // Copy the original image to the temporary array
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            temp[i][j] = image[i][j];
        }
    }

    // Apply blur to each pixel in the original image
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int count = 0;
            int totalRed = 0, totalGreen = 0, totalBlue = 0;

            for (int di = -1; di <= 1; di++)
            {
                for (int dj = -1; dj <= 1; dj++)
                {
                    int new_i = i + di;
                    int new_j = j + dj;

                    if (new_i >= 0 && new_i < height && new_j >= 0 && new_j < width)
                    {
                        totalRed += temp[new_i][new_j].rgbtRed;
                        totalGreen += temp[new_i][new_j].rgbtGreen;
                        totalBlue += temp[new_i][new_j].rgbtBlue;
                        count++;
                    }
                }
            }

            // Update the original image with the averaged color
            image[i][j].rgbtRed = round((float)totalRed / count);
            image[i][j].rgbtGreen = round((float)totalGreen / count);
            image[i][j].rgbtBlue = round((float)totalBlue / count);
        }
    }
}

// Detect edges using the Sobel operator
void edges(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE temp[height][width]; // Temporary array to store edge-detected pixels

    // Copy the original image to the temporary array
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            temp[i][j] = image[i][j];
        }
    }

    // Apply edge detection to each pixel in the original image
    int gx[3][3] = {{-1, 0, 1}, {-2, 0, 2}, {-1, 0, 1}};
    int gy[3][3] = {{-1, -2, -1}, {0, 0, 0}, {1, 2, 1}};

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            int gx_red = 0, gx_green = 0, gx_blue = 0;
            int gy_red = 0, gy_green = 0, gy_blue = 0;

            for (int di = -1; di <= 1; di++)
            {
                for (int dj = -1; dj <= 1; dj++)
                {
                    int new_i = i + di;
                    int new_j = j + dj;

                    if (new_i >= 0 && new_i < height && new_j >= 0 && new_j < width)
                    {
                        gx_red += temp[new_i][new_j].rgbtRed * gx[di + 1][dj + 1];
                        gx_green += temp[new_i][new_j].rgbtGreen * gx[di + 1][dj + 1];
                        gx_blue += temp[new_i][new_j].rgbtBlue * gx[di + 1][dj + 1];

                        gy_red += temp[new_i][new_j].rgbtRed * gy[di + 1][dj + 1];
                        gy_green += temp[new_i][new_j].rgbtGreen * gy[di + 1][dj + 1];
                        gy_blue += temp[new_i][new_j].rgbtBlue * gy[di + 1][dj + 1];
                    }
                }
            }

            int newRed = round(sqrt(gx_red * gx_red + gy_red * gy_red));
            int newGreen = round(sqrt(gx_green * gx_green + gy_green * gy_green));
            int newBlue = round(sqrt(gx_blue * gx_blue + gy_blue * gy_blue));

            image[i][j].rgbtRed = (newRed > 255) ? 255 : newRed;
            image[i][j].rgbtGreen = (newGreen > 255) ? 255 : newGreen;
            image[i][j].rgbtBlue = (newBlue > 255) ? 255 : newBlue;
        }
    }
}
