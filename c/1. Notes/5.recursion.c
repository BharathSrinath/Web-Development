// Draws a pyramid using iteration
// In general this is what we do. You could see that we have used 2 for-loops. First for-loop is for the rows where in every iteration it moves to the next row.

#include <cs50.h>
#include <stdio.h>

void draw(int n);

int main(void)
{
    int height = get_int("Height: ");
    draw(height);
}

void draw(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i + 1; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}

// Doing exactly the same thing with recursion

// Draws a pyramid (incorrectly) using recursion.
// This program will lead to infinte recursion.
// This will not compile becausse there is a safety mechanism designed with 'make' compiler to stop this.
// Will discuss the actual issue down the line. Now lets see how the recursion works.

#include <cs50.h>
#include <stdio.h>

void draw(int n);

int main(void)
{
    draw(1);
}

void draw(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("#");
    }
    printf("\n");

    draw(n + 1);
}
// draw (n+1) actually calls the function again and again.
// Irrespective of the 'n' value, the function will call itself forever. Why? Because, n is incremented everytime and there is no exit condition. See here instead of two for-loops we have only one. Whatever the first loop does it in the previous is done by the n+1 condition in this code. Only drawback is the function will be calling itself indefinitely. The next code will sort this issue by introducing something called as base case which is nothing but the exit condition. Lets look at the proper explanation how recursion works.

#include <cs50.h>
#include <stdio.h>

void draw(int n);

int main(void)
{
    int height = get_int("Height: ");
    draw(height);
}

void draw(int n)
{
    if (n <= 0)
    {
        return;
    }
    draw(n - 1);

// Look carefully. for-loop will not be executed until the base case fails. This is because, everytime the code reaches the function draw (n - 1), it calls itself. That is we have draw function within draw function.  Once the base case fails, now what happens? Pay attention here. After the base case fails, it starts returning a result or value to the function that called it. (that is the previous function) This is called as backtracking. It continues until all recursive calls have returned their results, and the original function call (the initial call to the recursive function - Which happened in main) receives the final result. Everytime the return happens, whatever that is after the recursive function will be executed with the value that it had received with backtracking. Here draw function in line 74 kept on calling the draw function to which it will return the values. Draw has the values 1,2,3 and 4 if the use has entered the height as 4. It has received it in the order of 4,3,2,1. But while backtracking, the first value that will be returned is 1, second value will be 2 and so on.

    for (int i = 0; i < n; i++)
    {
        printf("#");
    }
    printf("\n");
}

// Program for sum of n natural numbers

// Program for sum of n natural numbers

#include <stdio.h>

int sum (int x)
{
    int s = 0;
    if (x == 1)
    return x;
// I have just avoided the curly braces just because it is a single statement.
    s = x + sum (x - 1);
// When the control reaches this line for the first time, s = 5 + sum (4)
// Followed by s = 4 + sum (3), s = 3 + sum (2), s = 2 + sum (1)
// Then the base condition is achieved which will return x
// Now x value (which is 1 at ths point) will be passed onto the last called function. ie., s = 2 + sum (1)
    // Understand this now. sum (1) will be replaced with 1. so 2 + 1 = 3. Now this will value will returned to s = 3 + sum (2) and sum (2) will be replaced with 3 and so on. Final value will be 15 if the user has entered the number as 5.
return s;
}

int main ()
{
    int a,n;
    printf ("Enter a number: ");
    scanf ("%d", &n);
    a = sum (n);
    printf ("%d\n", a);
}

// For a detailed explanation on recursion: https://youtu.be/KQZIBckWK-s?t=813
// Crux of the video.
    // Lets say the main function has a statck of memory allocated it.
    // The next stack of memory is occupied by draw function.
    // Once the values start to return, your n is going to updated to each time at void draw(int n) and hence the stack of of memory.
    // Remember that the next few lines were part of recursion. They wont executed any more. The lines of code after the draw (n-1) will be executed.

// Write your own recursive function called factorial.
// Factorial should take an int and return the factorial of the number as a parameter

#include <cs50.h>
#include <stdio.h>

int facorial(int a);

int main(void)
{
    int n = get_int("Enter a number: ");
    printf("Value of %i factorial is: %i\n", n, facorial(n));
}

int facorial(int a)
{
    if (a == 1)
    {
        return 1;
    }
    return a * facorial(a - 1);
}

// So when can you use recursion?
// Divide and Conquer: If you can break down a problem into smaller sub-problems of the same type, and the solution to the larger problem can be constructed from the solutions of these smaller sub-problems, recursion might be a good fit.
// Backtracking and Exploration: Recursion is often used in backtracking algorithms, where you explore all possible solutions and backtrack when
// necessary.
// Nested Structures: If the problem has nested structures, like nested arrays or nested loops, it might be a hint that recursion could be used to handle these nested levels.

// Lets look at one of the oldest mathematical unsolved mathematical puzzle called "collatz conjecture or 3n+1 problem or hailstone sequence" It states that for any values given by the user, if you perform the following mathematical operations, it will result in => 4,2,1 That is the final value will always be 1. If n is even number, n = n/2 and then n = 3n + 1 If n is odd number, n = 3n + 1 and then n = n/2
// For an example,
// If n is 9, 3n + 1 = 28; then 28/2 = 14 and 14/2 = 7; Then 3n + 1 = 22; n/2 = 11; 3n + 1 = 34; n/2 = 17; 3n + 1 = 26; n/2 = 13; 3n
// + 1 = 40; n/2 = 20 and then 10 and then 5; 3n + 1 = 16; n/2 = 8, 4, 2, 1

// Now with this logic, you should use recursion to find how many steps will it take to reach the value 1.

#include <cs50.h>
#include <stdio.h>

int steps_taken(int a);

int main(void)

{
    int n = get_int("Enter a number: ");
    printf("Total number of steps taken: %i\n", steps_taken(n));
}

int steps_taken(int a)
{
    if (a == 1)
    {
        return 0;
    }
    else if (a % 2 == 0)
    {
        return 1 + steps_taken(a / 2);
        // Look very carefully. Here return 1 will return the value of 1 to steps_function and immediately calls the function again with new arguments which will indeed return 1 again if the conidtion is true. These return values are added again and again until the base case is reached.
    }
    else
    {
        return 1 + steps_taken(3 * a + 1);
    }
}


// Types of recursion
// Direct: A function calling itself durectly
    // function 1
    // {
        // function 1
    // }
// Indirect: A function calling itself via another function
    // function 1
    // {
        // function 2
    // }
    // function 2
    // {
        //  function 1
    // }
    // Here funnction 1 is calling itslef via function 2
// Tail: When there are no execution that needs to be made after the function
        void function_name (int a)
        {
            if (a > 1)
            return 0;
            else
            printf ("%d", a);
            function_name(a - 1);
        }
    // But you have to careful with examples like below
        void function_name (int a)
        {
            if (a > 1)
            return 0;
            else
            printf ("%d", a);
            return 1 + function_name (a/2);
            // Here even though there are no lines after the funnction, the additional operation will be performed only afte the function has been called. So this becomes an example for non-tail recursion
            // To put it simply, while back tracking, if you have any more operations to perform after each return then it is a non tail functio
        }

// Simple program to understand recursion

#include <stdio.h>

void count (int n)
{
    static int d = 1;
    // When declared as static the value will not be reinitialised everytime when you come to back to this line. Keep that in mind.
    printf ("%d\n", n);
    printf ("%d\n", d);
    d++;
    if (n > 1)
    count (n - 1);
    printf ("%d\n", d);
}

int main ()
{
    count (3);
}

// n is 3
// d is 1

// n is 2
// d is 2

// n is 1
// d is 3

// backtracking
// d is 4
// d is 4
// d is 3