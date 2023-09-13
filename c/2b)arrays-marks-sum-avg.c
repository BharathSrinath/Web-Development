// Read the marks and print the sum and average

#include <stdio.h>

int main()
{
    int id, subs;

    printf("Enter the number of students: ");
    scanf("%d", &id);

    printf("Enter the number of subjects: ");
    scanf("%d", &subs);

    int student[id][subs];
    // You have to declare this only after reading the id and subs. (Think logically you will understand why)

    for (int j = 0; j < id; j++)
    {
        printf("Student %d:\n", j + 1);

        for (int i = 0; i < subs; i++)
        {
            printf("Enter the mark of subject %d: ", i + 1);
            scanf("%d", &student[j][i]);
        }
    }

    for (int x = 0; x < id; x++)
    {
        int sum = 0;
        for (int y = 0; y < subs; y++)
        {
            sum = sum + student[x][y];
        }
        float avg = (float)sum / subs;
        printf("\nTotal mark of Student %d: %d", x + 1, sum);
        printf("\nAverage mark of Student %d: %.2f", x + 1, avg);
    }
}