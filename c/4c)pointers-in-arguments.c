#include <stdio.h>
#include <stdlib.h>

void f (int *p, int m)
// void is the return type. So it doesn't return any values.  
// i is passed by reference to the pointer variable p. But j is being passed as a value. 
{
   m = m + 5;
// Here, m = m + 5 doesnt actually have any effect on j's value because m is local to the function and its updated value is not returned.
   *p = *p + m;
// But, i's value is changed by accessing its address via p.
}
void main()
{
    int i = 5, j = 10;
    f (&i, j);
    printf ("%d", i + j);
// So, here i's changed value of 20 is added with j's unaffected value of 10.
}