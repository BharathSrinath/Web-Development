// Order of evaluation 1

#include <stdio.h>

int main()
{
    int a[] = {10, 11, -1, 56, 67, 5, 4};
    int *p, *q;
    p = a;
    printf("%d %d %d %d\n", *p, (*p)++, *p++, *++p);
    // *++p => p will point to 11 from 10 and 11 will be printed
    // *p++ => 11 will be printed and then point to -1
    // (*p)++ => -1 will be printed and then the value at the *p will be incremented (that is from -1 to 0)
        // This is very important to remember. Parantheses takes the first precedence.
    // *p => 0 will be printed 
}

// Output:

// PS C:\Users\Bharath Srinath\Documents\GitHub\web-development\c> .\dummy
// 0 -1 11 11

// What I understood is that, instead of proceeding from left to right in the printf function, based on the output I am observing, the operation starts with *++p and then moves to *p++ and subsequently to (*p)++, finally arriving at *p. Even though that is acceptable, the expected output should be in the order of 11 11 -1 0, right? However, it is also displayed in reverse order. Now, I initially thought there might be something wrong with my compiler. So, I tried a simple program.

#include <stdio.h>

int main()
{
    int a[] = {12, 11, -1, 56, 67, 5, 4};
    printf("%d %d %d", a[0] + 1, a[1], a[2]);
}

// Output is

// PS C:\Users\Bharath Srinath\Documents\GitHub\web-development\c> .\dummy
// 13 11 -1

// Why there is a differnce in both the outputs?

// Answer:

// The 'order of evaluation of arguments' in a function call is not defined in C (unspecified), so it can vary between different compilers or even compiler versions and the compiler is free to evaluate the arguments in any order it sees fit. In your case, it seems like your compiler evaluates the arguments in reverse order.

// It’s generally a good idea to avoid writing code that depends on the order of evaluation of function arguments, especially when the arguments have side effects. (Change of values in our case within the printf function)

// Follwoing is the best way to write the same program

#include <stdio.h>

int main()
{
    int a[] = {12, 11, -1, 56, 67, 5, 4};
    int *p;
    p = a;
    int x = *p;
    int y = (*p)++;
    int z = *p++;
    int w = *++p;
    printf("%d %d %d %d\n", x, y, z, w);
}

// Order of evaluation 2

#include <stdio.h>

int main()
{
    char str[] = "Welcome to Jenny's lectures";
    char *ptr = str;
    printf("%c\n", *(ptr++ +1));
    // The expression `*(ptr++ + 1)` does not increment the pointer by 2 positions. Instead, it increments the pointer by 1 position and then retrieves the value stored at the next memory location. Here's how it works:
    // The `ptr++` expression increments the `ptr` pointer by 1 position, so it points to the second character of the `str` array, which is `e`. However, the value of this expression is the value of `ptr` before it was incremented, which is a pointer to the first character of the `str` array, `W`.
    // The `ptr++ + 1` expression adds 1 to the value of the `ptr++` expression, which is a pointer to the first character of the `str` array. This results in a pointer to the second character of the `str` array, which is `e`.
    // The `*(ptr++ + 1)` expression dereferences this pointer and retrieves the value stored at that memory location, which is `e`.
    // So, the output of this expression is `e`, not `l`.
    printf("%c\n", *ptr);
    printf("%c\n", *((ptr-- +5)-1)+3);
    // Key understanding
        // Increment/Decrement is not same as add/sub
        // when you ptr++, it actually means ptr = ptr + 1. The updated value is stored in ptr itlself, so its value changes. But when you just use ptr + 1, value of ptr doesnt change. Remember this carefully. 
     printf("%c\n", *ptr);
     printf("%c\n", *(++ptr + 10) + 32);
     printf("%c %c %c \n", *ptr, *++ptr, *--ptr);
    //  Among multiple dereference operators, compilers go from R to L
}