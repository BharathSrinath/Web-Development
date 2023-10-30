// To find whether a given number is prime number or not - Logic 1

#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int main(void)
{
    int n;
    bool a = true;
    printf("Enter a number: ");
    scanf("%i", &n);
    if (n < 2)
    {
        printf("Not a prime number");
    }
    else if (n == 2)
    {
        printf("It is a prime number");
    }
    for (int i = 2; i < sqrt(n); i++)
    {
        if (n % i == 0)
        {
            a = false;
            break;
        }
    }
    if (a == false)
    {
        printf("Not a prime number");
    }
    else
    {
        printf("It is a prime number");
    }
}

// To find whether a given number is prime number or not - Logic 2

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n;
    printf ("Enter a number: ");
    scanf ("%d", &n);
    for (int x = 2; x * x <= n; x++)
    {
        if (n % x == 0)
        {
            printf("Not a Prime Number");
            return 1;
        }
    }
    printf("Prime Number");
}

// Prints the n value of prime numbers

#include <stdio.h>
#include <stdbool.h>

bool is_prime(int num);

int main(void) {
    int n;
    printf("Enter the number of prime numbers to print: ");
    scanf("%i", &n);

    int count = 0;
    int num = 2;

    while (count < n) {
        if (is_prime(num)) {
            printf("%i ", num);
            count++;
        }
        num++;
        // num is declared outside because, if is_prime is false, entire if loop will not executed. But we want the num to be increased so that we can check whether the next number is prime or not. 
        // count cannot be declared outside because we want count to increase only when the conidtion is true.  
    }

    printf("\n");
    return 0;
}

bool is_prime(int num) {
    if (num < 2) {
        return false;
    }

    for (int i = 2; i <= num / 2; i++) 
    // This is because a number cannot have a divisor greater than its half, as the result would be less than 2, which is already checked in step 1.
    {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}