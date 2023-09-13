// Unlike addition where you add elemnents of the same position, multiplicaiton is slightly complex. You have to multiply row 1 of first martrix with col 1 and then add their values then with col 2 and with col 3. This will complete the multiplication of first row and then repeat it for other rows too.

// Product of two matrices

#include <stdio.h>

int main()
{
    int rows, cols;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);
    printf("Enter the number of cols: ");
    scanf("%d", &cols);

    int a[rows][cols], b[rows][cols];

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

    printf("Product of two matrices:\n");

    for (int m = 0; m < rows; m++)
    {
        for (int n = 0; n < rows; n++)
        {
            int sum = 0;
            for (int o = 0; o < cols; o++)
            {
                sum = sum + a[m][o] * b[o][n];
            }
            printf("%d\t", sum);
        }
        printf("\n");
    }
}