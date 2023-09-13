#include <stdio.h>

int main()
{
    int a,b;
    char choice;
    printf ("Enter a: ");
    scanf ("%d", &a);
    printf ("Enter b: ");
    scanf ("%d", &b);
    printf ("Enter the operation to be performed: ");
    scanf (" %c", &choice);
    // When you use %d to read integers and then follow it with %c to read a character, it can lead to unexpected behavior. The %c format specifier can consume newline characters or other whitespace characters that are left in the input buffer after reading integers.
    // To fix this, you can add a space before the %c format specifier in the scanf function to consume any leading whitespace characters. 

    int sum, sub, prod, div;
    switch (choice)
    {
    case '+':
    sum = a + b;
    printf ("Sum of a and b: %d", sum);
    break;
    case '-':
    sub = a - b;
    printf ("Sub of a and b: %d", sub);
    break;
    case '*':
    prod = a * b;
    printf ("Product of a and b: %d", prod);
    break;
    case '/':
    div = a / b;
    printf ("Division of a and b: %d", div);
    break;
    default:
    printf ("Invlaid Option");
    break;
    }

}