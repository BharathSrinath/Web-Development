#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int start, end;
    do
    {
        start = get_int("Start size: ");
    }
    while (start < 9);
    do
    {
        end = get_int("End size: ");
    }
    while (end < start);
    int years = 0;
    while (start < end)
    {
        start = start + (start/3) - (start/4);
        years++;
    }
    printf("Years: %i\n", years);
}

// Learnings:
// While loop doesnt have a semicolon but a do-while loop has one.
//In this problem, you dont to worry decimal points. Because we are integer. It will ignore everything after the decimal point.