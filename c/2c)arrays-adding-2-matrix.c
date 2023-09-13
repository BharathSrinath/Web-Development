// Adding two matrices

#include <stdio.h>

int main()
{
    int rows, cols;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);
    printf("Enter the number of cols: ");
    scanf("%d", &cols);

    int a[rows][cols], b[rows][cols], c[rows][cols];

    // When you are adding two matrices, they should have same number of rows and cols

    printf("Enter the %d elements of matrix 1:\n", rows * cols);
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            scanf("%d", &a[i][j]);
        }
        printf("\n");
    }

    printf("Enter the %d elements of matrix 2:\n", rows * cols);
    for (int k = 0; k < rows; k++)
    {
        for (int l = 0; l < cols; l++)
        {
            scanf("%d", &b[k][l]);
        }
        printf("\n");
    }

    printf("Sum of two matrices:\n");
    for (int m = 0; m < rows; m++)
    {
        for (int n = 0; n < cols; n++)
        {
            c[m][n] = a[m][n] + b[m][n];
            printf("%d\t", c[m][n]);
        }
        printf("\n");
    }
}