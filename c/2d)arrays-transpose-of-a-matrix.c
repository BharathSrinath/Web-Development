#include <stdio.h>

int main()
{
    int rows, cols;
    printf("Enter the number of rows: ");
    scanf("%d", &rows);
    printf("Enter the number of columns: ");
    scanf("%d", &cols);
    int a[rows][cols];

    printf("Enter the %d values: \n", rows * cols);

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            scanf("%d", &a[i][j]);
        }
        printf("\n");
    }

    printf("\nEntered values are:\n\n");

    for (int k = 0; k < rows; k++)
    {
        for (int l = 0; l < cols; l++)
        {
            printf("%d\t", a[k][l]);
        }
        printf("\n");
    }

    printf("\nTransposed values are\n\n");

    for (int m = 0; m < cols; m++)
    {
        for (int l = 0; l < rows; l++)
        {
            printf ("%d\t", a[l][m]);
            // We have changes a [m][l] to a [l][m]
        }
        printf ("\n");
    }
}

// You can also assign the transposed matrix to another variable and then print the matrix using that variable
// These are the changes that you will be making

// int a[rows][cols], b[rows][cols];

// for (int o = 0; o < rows; o++)
// {
//     for (int p = 0; p < cols; p++)
//     {
//         b[p][o] = a[o][p];
//     }
// }

// printf("\nTransposed values are\n\n");

// for (int m = 0; m < cols; m++)
// {
//     for (int l = 0; l < rows; l++)
//     {
//         printf ("%d ", b[m][l]);
        
//     }
//     printf ("\n");
// }