#include <stdio.h>

void main()
{
    int i = 5;
    float f = 2.7;
    char c = 's';
    void *p;

    p = &i;
    printf("i = %d\n", *(int *)p);
    p = &f;
    printf("f = %.2f\n", *(float *)p);
    p = &c;
    printf("c = %c\n", *(char *)p);
}