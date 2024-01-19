// Prints an integer

#include <stdio.h>

int main(void)
{
    int n = 50;
    printf("%i\n", n);
}

// Prints an integer's address

#include <stdio.h>

int main(void)
{
    int n = 50;
    printf("%p\n", &n);
    // To print the address you should use %p as the format specifier
}

// Stores and prints an integer's address

#include <stdio.h>

int main(void)
{
    int n = 50;
    int *p = &n;
    printf("%p\n", p);
}

// Stores and prints an integer via its address

#include <stdio.h>

int main(void)
{
    int n = 50;
    int *p = &n;
    printf("%i\n", *p);
    // Here you are not printing the integer via its variable that stores the value (printf("%i\n", n);) rather you are printing the
    // value by using the address of the variable.
}

// Prints a string

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = "HI!";
    printf("%s\n", s);
}

// Prints a string without using CS50 library
// From now on this is how you will declare a string in C

#include <stdio.h>
int main(void)
{
    char *s = "HI!";
    printf("%s\n", s);
}

// The pointer itself does not hold the entire string; it only holds the address of the first character.
// The pointer s is set to point to the first character of the string literal, which is 'H' (You can point to the subsequent
// characters to by *(s+1), *(s+2), etc.)
// Difference between char *s = "HI!"; and char s [] = "HI!";

// char *s = "HI!";:
// In this declaration, s is a pointer to a character (char pointer).
// The string "HI!" is stored in a read-only section of memory (usually in the data segment of the program), and s points to the first character 'H'.
// This means that you can't modify the string through s because it's stored in a read-only memory section. Attempting to modify it could result in undefined behavior.
// You can, however, reassign s to point to a different string if needed.

+---+        +-----+
| s | ---->  | 'H' |
+---+        +-----+
             | 'I' |
             +-----+
             | '!' |
             +-----+
             | '\0'|
             +-----+

// char s[] = "HI!";:
// In this declaration, s is an array of characters (a character array).
// The string "HI!" is stored in a writable section of memory, and the contents of the string are copied into the array s.
// This allows you to modify the string through the s array without any issues.
// The size of the s array is automatically determined based on the length of the string "HI!" plus one additional character for the null terminator '\0'.

+-----+-----+-----+-----+
| 'H' | 'I' | '!' | '\0'|
+-----+-----+-----+-----+

// In C, a pointer is a variable that stores the memory address of another variable.
// But with respect to string literals,  variable s is a pointer variable (in our scenario) that stores the memory address of a character (not another variable in this case). When you write char *s = "HI!";, the pointer variable s is initialized to point to
// the memory address where the string literal "HI!" is stored. You should remember that string literals are stored in a read-only memory, typically in a special segment of memory known as the "text" or "code" segment and not stored in a regular variable.
    // Remember that read only doesnt mean that you are storing in a hardware component called ROM (that stores firmware adn BIOs details)
    // Here read-only means string literals are stored in code segment which are part of the RAM and mark them as read-only

// Good practice: Set the pointer to NULL if you dont know whaat value to give in the initial statge of a program.
// You cant delcare multiple pointers like this int *s,y,z. Here only s will be a integer pointer variable, while the other two will
// just be an integer varible. Correct declaration is int *s,*y,*z.

// This will print the address that the pointer variable points to which is s in this case
#include <stdio.h>
int main(void)
{
    char *s = "HI!";
    printf("%p\n", s);
}

// We will go back to string function in cs50 once more.
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string s = "HI!";
    printf("%p\n", s);
    printf("%p\n", &s[0]);
    printf("%p\n", &s[1]);
    printf("%p\n", &s[2]);
    printf("%p\n", &s[3]);
}

// Here first two printf will print the same output. Because first printf also points to only the beginning address of the string
// (that is the first character) subsequent printf will print the different addresses

// Same thing without cs50.
// Here we are printinhg the value.

#include <stdio.h>

int main(void)
{
    char *s = "HI!";
    printf("%c\n", s[0]);
    printf("%c\n", s[1]);
    printf("%c\n", s[2]);
}

// Here we are printing the string literal through pointer variable.
// Pointer will have the address of each character in that string. So we are printing each character by referring to their address
// via pointer variable.

#include <stdio.h>

int main(void)
{
    char *s = "HI!";
    printf("%c\n", *s);
    printf("%c\n", *(s + 1));
    printf("%c\n", *(s + 2));
}

// Here the printf will print until it finds a NUL character as we have used %s. Second printf will start from 'i' and third wil
// start from ! and goes on till NUL character

#include <stdio.h>

int main(void)
{
    char *s = "HI!";
    printf("%s\n", s);
    printf("%s\n", s + 1);
    printf("%s\n", s + 2);
}

// This below program is not a correct program to compare two strings. We use strcmp to compare strings.
// This is because in C, when you define a string using double quotes, like "hello", it is treated as a character array. An array in
// C is essentially a pointer to the first element of the array. When you use the == operator with arrays (including strings), you
// are comparing the addresses of the first elements, not the actual content of the arrays. So, the below program will always print
// "Different", because the addresses are different. Also, you know that string literals are stored in ROM. But user entered strings
// are stored in heap memory which is part of RAM. Within the RAM, there are two primary regions that programs use to store data:
// Stack Memory: This region is used for storing function call information, local variables, and other small data structures. It
// operates in a last-in-first-out (LIFO) manner, meaning the most recently added items are the first to be removed.
// Heap Memory: This region is used for dynamic memory allocation, where programs can request and allocate memory during runtime for larger and more flexible data structures, such as arrays and linked lists. The program can access and use the heap memory as needed but is also responsible for managing and releasing the allocated memory when it's no longer needed.
// Unlike string literals which should not be altered within the program, user entered strings can be altered.
// If you want to manipulate a string created from a string literal, you should copy it into an array of characters. This array can be modified because it's not read-only:
// String literals are often used to represent constants in C programs, such as error messages, prompts, or predefined strings.

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Get two strings
    char *s = get_string("s: ");
    char *t = get_string("t: ");

    // Here s and t are pointing to the addresses of the strings that are stored in the heap memory.

    // Compare strings' addresses
    if (s == t)
    {
        printf("Same\n");
    }
    else
    {
        printf("Different\n");
    }
}

// This is another good example how the memory functions with respect to strings

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Get a string
    string s = get_string("s: ");

    // The = operator is used to copy the value stored in the right side variable to the left side varaible. But this doesn't work
    // with respect to strings. As you know strings are pointer to a variable. That is they point to the address. So now what
    // happens is address of the first character of the string s will be copied to the first character of the strings t. The
    // contents are not copied. To do that we should 'strcpy'.
    string t = s;

    // After the above explanation, you will see that when you change the first character of string t to upper-case, it will also
    // chaneg the first character of string s. This is because, the address of the first character of string s has been copied to
    // the first character of string t and now both has same address. So changing will eventually change the other.

    t[0] = toupper(t[0]);

    // Print string twice
    printf("s: %s\n", s);
    printf("t: %s\n", t);
}
// One of the best practices with respect to this program
// use an if condition 'if(strlen(t)>0)' then go for uppercase fucntion. Why?
// This will help us to avoid seg fault where use might provide an input that a programmer haven't thought of, Lets say that the
// user has hit enter without entering anything. In this scenario you dont need to uppercase anything.

// Capitalizes a copy of a string using strcpy

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    // Get a string
    char *s = get_string("s: ");

    // Allocate memory for another string
    char *t = malloc(strlen(s) + 1);
    // malloc - memory allocation allocates memory dynamically during the execution of a program.
    // Here we are dynamically allocating memory on the heap for a character array (string) that will be pointed to by the pointer
    // variable t (that is t will hold the address). +1 is for the NUL character at the end of the string
    // Allocating space using malloc means that it is returning a pointer to the variable. If there no space, it will return NULL.
    // So dereferencing a NULL pointer will result in a seg fault. So, best practice is to use a condition where malloc gives you a
    // NULL pointer, you should exit the porgram (return 1).

    // Copy string into memory
    strcpy(t, s);

    // Capitalize copy
    t[0] = toupper(t[0]);

    // Print strings
    printf("s: %s\n", s);
    printf("t: %s\n", t);
}

// Need for malloc:
// Automatic variables must have a fixed size determined at compile time. If you need a variable-sized data structure, like an array
// whose size is determined during runtime or a linked list with an unknown number of elements, malloc allows you to allocate memory
// of the required size dynamically. Once the scope of automatic variables ends (e.g., when the function in which they are declared
// returns), the memory used by those variables is automatically released.  In contrast, memory allocated with malloc persists until
// explicitly freed with free. Automatic variables are typically stored on the stack, and the stack has a limited size. If you
// allocate large data structures or use recursive functions extensively, you may encounter a stack overflow. Using malloc and the
// heap memory avoids this limitation. Imagine you have a variable or a data structure that you want to use in multiple functions
// within your program. If you use automatic variables, those variables are local to each function, meaning they only exist and can
// be used within that specific function. But with malloc, you can allocate memory in one function and pass a pointer to that memory
// to other functions, allowing them to access and manipulate the same data.

// Lets understand the difference between NUL and NULL:
// NUL:
// represented by the escape sequence \0.
// ASCII value is 0
// It is used to mark the end of a string
// NULL:
// It is defined in C as a null pointer constant.
// It is typically used to represent a pointer that does not point to any valid memory address.
// The value of NULL is usually defined as (void*)0, representing a pointer with the value 0.
// It is commonly used to initialize pointers before they are assigned to point to valid memory locations or to check if a pointer
// is valid before dereferencing it. Ex:
int *ptr = NULL; // Initializing a pointer to NULL
if (ptr != NULL)
{
    // Do something with the pointer if it points to valid memory
}
// Both get_string and malloc can return a special value called NULL. How can you use this?
// Lets say that there is no enough memory, get_string can end the program by using the condition,
if (s == NULL)
{
    return 1;
}
// These are very good practices that should incorporate in your code. Without these conditions the code will still work, but every
// user is different. So might not be able to guess what they are input will be. On that notes, you can use return 0 at the end of
// your code to signify that everything went well. Here is the below code that incorporates the above lessons.

// Capitalizes a copy of a string without memory errors

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    // Get a string
    char *s = get_string("s: ");
    if (s == NULL)
    {
        return 1;
    }

    // Allocate memory for another string
    char *t = malloc(strlen(s) + 1);
    if (t == NULL)
    {
        return 1;
    }

    // Copy string into memory
    strcpy(t, s);

    // Capitalize copy
    if (strlen(t) > 0)
    {
        t[0] = toupper(t[0]);
    }

    // Print strings
    printf("s: %s\n", s);
    printf("t: %s\n", t);

    // Free memory
    // Technically when the program quits, they will free the memory automatically. But lets say the program is open for a very
    // period of time (like you do like keeping the chrome open for days), you dont want the memory to be occupied all the time. So
    // it is also a best practice to free the memory once the program quits. It is actually not needed for get_string. Because it is
    // built in by default.
    free(t);
    return 0;
}

// valgrind - Open-source tool used for debugging C and C++ programs
// It helps to identify memory-related issues such as memory leaks, invalid memory accesses, and undefined behavior.

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *x = malloc(3 * sizeof(int));
    // You can allocate memory this way too. Just see that you are storing address in a pointer variable
    x[1] = 72;
    x[2] = 73;
    x[3] = 33;
    // You can easliy spot the mistake here. You are indexing from 0. But you started with one. So what happens?
    // You are occupying additional 4 spaces that you shoudn't be touching
    // After allocating memory, if you dont free the memory, you will see memory leak error in valgrind.
    // Okay, lets look at this question.
    //  In this code compiler doesn't throw any error. But valgrind said that 'Invalid write of 4' This is due to indexing from 1
    //  rather than 0 which results in usage of 4 bytes of memory which you are not supposed to use. This should actually result in
    //  a segfault.
    // But, the occurrence of a segmentation fault (segfault) due to accessing out-of-bounds memory or any other undefined behavior
    // is not always consistent. The reason for this inconsistency is that C does not provide built-in bounds-checking for array
    // accesses. When you access memory beyond the allocated bounds of an array or pointer, the C standard does not specify the
    // exact behavior unlike Java/JS/Python.
}

// So incorporating the above and best practices, your new code is as follows.

int main(void)
{
    int *x = malloc(3 * sizeof(int));
    if (x == NULL)
    {
        return 1;
    }
    x[0] = 72;
    x[1] = 73;
    x[2] = 73;
    free(x);
    return 0;
}

// Understanding realloc ()

#include <stdio.h>
#include <stdlib.h>


int main ()
{
    int n, *p1;
    printf ("Enter the total number of values: ");
    scanf ("%d", &n);

    p1 = malloc (n * sizeof (int));
    printf ("Enter the values: \n");
    for (int i = 0; i < n; i++)
    {
        scanf ("%d", (p1+i));
    }

    printf ("Enter the updated size of n: ");
    scanf ("%d", &n);

    int *p2 = realloc (p1, n * sizeof (int));
    printf ("Old address: %p\nNew address: %p", p1, p2);

    printf ("\nThe entered values are: \n");
    for (int i = 0; i < n; i++)
    {
        printf ("%d\t", *(p2+i));
    }

    free (p1);
}


// garbage values - They refer to random or unpredictable data that resides in a variable or memory location. These values have not been explicitly assigned or initialized with meaningful data by the programmer.

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int scores[1024];
    // Here the varibale 'scores' has a size of 1024. But it has never been initialized.
    for (int i = 0; i < 1024; i++)
    {
        printf("%i\n", scores[i]);
    }
}

// This code will fail to swap two integers

#include <stdio.h>

void swap(int a, int b);

int main(void)
{
    int x = 1;
    int y = 2;

    printf("x is %i, y is %i\n", x, y);
    swap(x, y);
    printf("x is %i, y is %i\n", x, y);
}

void swap(int a, int b)
{
    int tmp = a;
    a = b;
    b = tmp;
}

// To understand this you should recall passing by value and passing by reference
// Passing by Value:
// When you pass an argument by value to a function, a copy of the argument's value is made and passed to the function.
// Inside the function, any changes made to the parameter's value will not affect the original argument outside the function.
// Example:
void modifyValue(int x)
{
    x = x + 10; // Changes to 'x' are local to this function and don't affect the original 'x'
}
int main()
{
    int number = 5;
    modifyValue(number); // Pass 'number' by value
    // 'number' remains unchanged in the calling code (still 5)
    return 0;
}
// Passing by Reference (using pointers):
// When you pass an argument by reference to a function, you pass a pointer to the memory location of the original argument.
// Any changes made to the parameter inside the function will affect the original argument outside the function.
// Example:
void modifyValueByReference(int *x)
{
    *x = *x + 10; // Changes made to the value pointed by 'x' will affect the original variable
}
int main()
{
    int number = 5;
    modifyValueByReference(&number); // Pass the memory address of 'number' as an argument
    // 'number' is modified to 15 in the calling code
    return 0;
}

// Swaps two integers using pointers

#include <stdio.h>

void swap(int *a, int *b);

int main(void)
{
    int x = 1;
    int y = 2;

    printf("x is %i, y is %i\n", x, y);
    swap(&x, &y);
    // You are passing the address to the 'void swap(int *a, int *b)'
    printf("x is %i, y is %i\n", x, y);
}

void swap(int *a, int *b)
// Now *a has an address to which it will point to. This address was passed by 'swap (&a, &y)'.
// Since this address is nothing but the address of x and y, the value of x and y will be altered directly based on the below
// snippet. This is why we call this passing by reference.
{
    int tmp = *a;
    // Here we are storing the value pointed to by a (which is the value of x) in the tmp variable.
    *a = *b;
    *b = tmp;
}

// Just a note about return values. You can't return multiple values like return a,b or even return a and in the next line return b.
// Because once the return function is executed, it exits the function. Another note about scanf. With respect to pointer variables
// you dont need to use '&' in scanf because pointers already contain the address.
// Based on the property of comma operator, the last value will be returned. In 'return a, b, c;' c will be returned

// Difference between void modify (char*, char*) and void modify (char [], char [])
    // They are essentially equivalent in terms of how they are used in function signatures.
    // void modify(char*, char*): This declaration indicates that the function expects two pointers to characters as parameters. In practice, these pointers can point to individual characters within character arrays or to dynamically allocated memory.
        // If your function is designed to work with a wide range of inputs, including dynamically allocated strings or string literals, using void modify(char*, char*) (pointer to characters) can provide more flexibility, as it can accept both pointers and arrays.
    // void modify(char[], char[]): This declaration suggests that the function expects two character arrays as parameters. In practice, these arrays can be used as if they were character pointers (as arrays decay into pointers when passed to functions).
        // If your function primarily deals with modifying strings (character arrays), using void modify(char[], char[]) might make the code more self-explanatory because 'it explicitly indicates that character arrays (that is complete strings) are expected'

// Returning string from a function
// See here we are not going to return the netore string itself. Rather only the base address that the pointer will point to. Once you return that subsequent characters will be retunrned till '\0'
// Since they are returning an address, you need a pointer variable in the main function to store this address (Keep this in mind)

#include <stdio.h>

char *display (); // Return type of this function will be address of a character

int main ()
{
    char *s;
    s = display (); // Pointer variable to store the base address of the string that has been returned
    printf ("String is %s\n", s);
}

char *display ()
{
    return "Bharath";  // Here only the base address, that is the address of B will returned and the subsequent characters will be accessed based on the base address as string literals are contigous memory.
}

// But when you define the above display function as follows, now it will not return the values as expected. Explanation is below.

char *display ()
{
    char str [] = "Bharath";
    return str;
}

// In this code snippet, str is an array, and it is a local variable. When you return str from the display function, you're returning a pointer to the first character of that array. However, this is problematic because str is a local variable allocated on the stack. Once the display function exits, the memory for str is deallocated, and the pointer you returned points to invalid memory. This results in undefined behavior if you try to access it in the main function. An important note.
    // Anything that is enclosed in double quotes is a string literal. But depending in the situation, they are not always treated as string literals as above.
    // In char str[] = "Bharath";, you are initializing a local character array str with the characters from the string literal "Bharath". In this context, "Bharath" is used to initialize the array str, but it becomes part of the memory allocated for str, not a separate string literal. The array str is stored on the stack, and it is not read-only.
    // So, while "Bharath" is originally a string literal, when used to initialize a local character array, it becomes part of that array, and the memory for the array is allocated on the stack.

// Local variable issue can be resolved by declaring the variable as static => static char str [] = "Bharath";
// static is used to control the storage duration (duration will be existing for the entire duration of the program) and scope of variables and functions.
// Static can be used in two ways
    // Static Variable Inside a Function: A static variable inside a function retains its value between function calls. (Unlike a local variable under a function definition whose memory will deallocated after returning the value.)
        // But remember while it's accessible within the function where it's declared, it's not accessible outside that function. Its scope is still limited to that function.
    // Static Global Variable: When you declare a global variable as static, it restricts the visibility of that variable to the current source file. That is another file cannot access this variable.


char *display ()
{
    char* str = "Bharath";
    return str;
}

// In this code snippet, str is a pointer, and it is also a local variable. However, it is assigned the ADDRESS OF A STRING LITERAL "Bharath" AND NOT THE FIRST CHARACTER (This makes all the difference). String literals are typically stored in a read-only section of memory (e.g., the data segment), and their memory remains valid throughout the program's execution. When you return str from the display function, you're returning a pointer to the string literal, and this memory remains valid even after the function exits. So, you can safely access the string pointed to by str in the main function.

// One more program to understand the base address. Might be tricky. So pay attention.
// In this program we are just shifting two places from the base address and printing the value in that address

#include <stdio.h>

int* returnpointer (int []);

int main ()
{
    int *p;
    int a [] = {1,2,3,4,5};
    p = returnpointer (a);
    printf ("%d", *p);
}

int* returnpointer (int a[]);

{
    a = a + 2;
    return a;
}

// But the above program will not work when we try to shift places within main function. Can you guess why? Lets see the program first.

#include <stdio.h>

int* returnpointer (int []);

int main ()
{
    int *p;
    int a [] = {1,2,3,4,5};
    a = a + 2;
    printf ("%d", *a);
    // Here you are attempting to reassign the entire array a to a new memory location by adding 2 to the array pointer a. This is not allowed in C because arrays are not modifiable as a whole; you cannot change their base address like this.
    // Arrays in C are considered fixed-size and their base address cannot be modified directly. Instead, you can work with individual elements of the array.
    // If your intention is to move the array pointer a two positions ahead in the array, you can achieve that by incrementing the pointer itself rather than trying to reassign the entire array:
        // declare another pointer variable (say b*) as int *b = a + 2;
    p = returnpointer (a);
    printf ("%d", *p);
}

int* returnpointer (int a[]);

{
    a = a + 2;
    return a;
}

// Function pointers - Understand this key difference.
// int* returnpointer (int []) => It is a declaration for a function named returnpointer that takes an array of integers as an argument and returns a pointer to an integer (int*).
// int (*returnpointer) (int []) => It is a declaration for a pointer to a function named returnpointer that takes an array of integers as an argument and returns an integer (int).
    // Function pointers should always be enclosed in paranthesis
    //  int (*returnpointer) (int []);, is a valid declaration for a pointer to a function, but it doesn't point to any specific function until you assign an address to it using the assignment operator (=).

// When a pointer varaibel contains the address of a variable, function pointer contains the address of particular block/code.
// Lets look at an example

#include <stdio.h>

int sum (int a, int b);

int main ()
{
    int s = 0;
    int (*add) (int, int) = &sum; // With respect to functions, you need write & while assigning the address to a pointer. Name of the function is sufficient as it anyways contains the base address
    // Here we are deckaring the pointer function and assigning the address of sum function to the add pointer function
    // Its declaration exactly same as the function declaration with respect to number of argumnets being passed
    s = add (2,3); // You need not use * every time and you know that already
    // This is the part where we are dereferencing the pointer. That is calling the pointer function whih points to sum function and also passing the necessary arguments along with it and the final returned value is stored in s.
    // Dereferencing a pointer means accessing the value or object that the pointer is pointing to. In simpler terms, it's a way to get the actual data that the pointer is pointing at.
    printf ("%d\n", s);
}

int sum (int a, int b)
{
    return a + b;
}

// Program to understand pointers

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int a = 28;
    int b = 50;
    int *c = &a;
    // Here, the value has c is now the address of a

    *c = 14;
    // c is pointing to a. Hence a will become 14
    c = &b;
    // Now the value has c is becomes the address of b
    *c = 25;
    // C is pointing to b. Hence b will become 25

    // Print results
    printf("a has the value %i, located at %p\n", a, &a);
    printf("b has the value %i, located at %p\n", b, &b);
    printf("c has the value %p, located at %p\n", c, &c);
}

// Call back functions

// Generally we pass arguments to function. But in call back functionm we pass function to a function
// This is done by passing an address of one function to other. That means the receving function should have function pointer inside arguments
// Lets look at an example

// Here sum and sub are call back function and display is the function that is used to call the other function in main

#include <stdio.h>

void sum (int a, int b)
{
    printf ("Sum is %d\n", a + b);
}

void sub (int a, int b)
{
    printf ("Sub is %d\n", a - b);
}

void display (void (*fptr)(int, int))
// The display function takes a function pointer as an argument. This function pointer is expected to point to a function that takes two int arguments and returns void
{
    fptr (5,1);
    // When you call display(sum) in the main function, you're essentially passing the sum function as a callback to the display function. Inside the display function, fptr will now point to the sum function. So, when you later call fptr(5, 1); inside display, it's like calling sum(5, 1);
}

int main ()
{
    display (sum);
    // Here when you are passing sum and sub, you have to think about the address that you are passing. (&sum and &sub). So *fptr will hold the address of sum/sub. When it enters the display function, you are dereferencing fptr. That is the control will move to whatever the fptr points to.
    display (sub);
}

// Lets write porgram for calculator that we have already written with switch case but this time using function pointers
    // Not just function pointers but array of function pointers. Yeah I know, the difficulty is high here. But you can understand it. DOnt worry just focus on it

#include <stdio.h>

void add (int a, int b)
{
    printf ("Sum is %d\n", a + b);
}
void sub (int a, int b)
{
    printf ("Sub is %d\n", a - b);
}
void mul (int a, int b)
{
    printf ("Product is %d\n", a * b);
}
void div (int a, int b)
{
    printf ("Division is %d\n", a / b);
}

int main ()
{
    int choice, number1, number2;
    void (*fptr[4])(int, int) = {add, sub, mul, div};
    // See in the above line, in general we assign address of one function to the pointer function. But here, we are using the array concept.
    // You are certainly familiar with the syntax here. You are decalring a pointer function called *fptr with array size being 4 since you have 4 options.
        // Just remmeber this syntax when you used to assign arrays to a variable. int a [4] = {21, 34, 56, 67} It is just similar to that.
        // Here the term void might confuse you. But remember a function will have a return type. We generally define the outside the main function. But since the pointer function is within main, we have to mention return type here itself.
        // Retrun type should be same as that of the functions of addm sub, mul and div
    printf ("Enter your choice (0 for addition, 1 for subtraction, 2 for multiplication and 3 for division): ");
    scanf ("%d", &choice);
    printf ("Enter the numbers: ");
    scanf ("%d %d", &number1, &number2);
    fptr[choice](number1, number2);
    // Now we are dereferencing it.
    // fptr [0] will have the addres of add and fptr [1] will have the address of sub and so on.
    // When you enter the choice as 1, sub will be performed.
}

// FILE function -  They are used to work with files. They provide a way to read from and write to files on your computer's storage system

#include <stdio.h>
#include <stdlib.h>
// FILE is defined in stdlib

int main(void)
{
    FILE *file; // Declare a FILE pointer
        // FILE pointer will have the address of the file. It will get the address afte the line of code
    file = fopen("example.txt", "w");
    // fopen does many important functions here
        // fopen uses the information of name and access mode to locate and identify the file you want to work with.
        // Then creates a data structure in memory known as a "file stream." This data structure contains information about the file, such as its name, its access mode, and its current position (where you are in the file). It also establishes a connection to the file on the disk.
        // Depending on the access mode and platform-specific defaults, fopen may also set up buffering. Buffering means that data is read from or written to the file in chunks (buffers) rather than one byte at a time. This can improve I/O performance.
        // It checks for errors during the process of setting up the file stream. If there are issues, such as the file not being found or a permissions problem, fopen will report an error.
        // Finally, fopen returns a pointer to the created file stream (of type FILE*). You can use this pointer to perform various file operations, such as reading, writing, moving the file pointer, and more.
    // Open/create a file named "example.txt" for writing
    // use r for reading and a for appending
        // while writing will overwrite the entire content, appending will start from end of the file which is useful to add new information.

    if (file == NULL) // Check if file opening was successful
    {
        printf("Error opening the file.\n");
        return 1;
    }

    fprintf(file, "Hello, world!\n"); // Write a string to the file

    fclose(file); // Close the file. It will accept the file pointer name as the input

    return 0;
}

// Saves names and numbers to a CSV file

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Open CSV file
    FILE *file = fopen("phonebook.csv", "a");
    // FILE command

    if (!file)
    {
        return 1;
    }

    // Get name and number
    char *name = get_string("Name: ");
    char *number = get_string("Number: ");

    // Print to file
    fprintf(file, "%s,%s\n", name, number);

    // Close file
    fclose(file);
}

// Reads datas from a file

#include <cs50.h>
#include <stdio.h>
// You are using new type of integer called unsigned inte with 8 bytes of memory. It is denoted by 'uint8_t'
#include <stdint.h>

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Improper Usage. \n");
        return 1;
    }

    FILE *input = fopen(argv[1], "r");
    // You will entering the filename in the command line while executing the code.
    // You can also sue string to store argv
    // string filename = argv [1];
    //  FILE *input = fopen(filename, "r");

    if (input == NULL)
    // That is if the file doesnt exist
    {
        printf("No such file found. \n");
        return 1;
    }

    uint8_t buffer[4];
    // We are creating buffer and names it as buffer to store the data that we read. Since we have only numbers in the file we have
    // allocated the size 4.

    fread(buffer, 1, 4, input);

    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", buffer[i]);
    }

    fclose(input);
    // closing the file that you have opened. If you dont close the file you will see memory leak issue with valgrind
    // flcose is not just at the end of program. You shoudl at all the palces when you know that the program will stop once it
    // reaches a certain condition.  (especially use them before the return statements)
}

// Other functions for FILE:

// fgetc() - Reads and returns the next character that the file points to.
    // It should be opened for reading. (If opened for writing, you will encounter an error)
        // Syntax: char ch  = fgetc (file pointer name);
        // You can use this to get single characters from files and if wrapped in a loop we could read all the characters from a file
            char ch;
            while ((ch = fgetc (file pointer)) != EOF)
                // Here EOF means 'End of File Marker/Character' which is a predefined constant that represents the end of a file.
                // It is typically defined in the stdio.h header as a special value. On most systems, EOF is defined as -1, although it can vary depending on the platform.
            printf ("%c", ch);
// fputc() - Writes/appends the specified character to the pointed to file
    // It should be opened for writing or appending
    // Syntax: fputc ('character',file pointer name)
        char ch;
        while ((ch = fgetc (file pointer)) != EOF)
        fputc (ch, file pointer name);
    // Example using an array
        char str [10] = "Bharath Srinath"
        for (i = 0; i < = strlen (str); i++)
        {
            fputc (str [i], filepointername)
        }
// fread() - It is used for reading binary data from a file.
    // It takes four arguments:
        // a pointer to a buffer where the data will be stored
        // the size of each element to be read
        // the number of elements to read
        // a pointer to the file stream to read from.
    // It reads a specified number of bytes directly from the file, without interpreting the data. It is commonly used for reading raw binary data, like images or binary files.
    // fopen should have read (not write or append)
    // fgetc() and fputc() are used for one characters at a time. fread can get as many as we specify
        // Example1:
            int arr[10];
            fread (arr, sizeof (int), 10, ptr);
        // Example2:
            double* aar2 = malloc (sizeof(double) * 80);
            fread (arr2, sizeof (double), 80, ptr);
        // Example3:
            char c;
            fread (&c, sizeof (char), 1, ptr);
    // Now this is important to understand. You know that just like strings, arrays are also pointer to the address of a variable.
    // In first two examples we have used the name of the buffer. Here since it is a single character you really dont need to use buffer rather just copy to the address directly.
// fwrite() - Exactly same as fread wih few differences.
    // fread() copies from file to buffer. But fwrite() writes from buffer to the file.
// fgets() - Reads a full string from a file (there is a function called 'gets' and 'puts' both of which are deprecated in C dute to buffer issues. Just keep that in mind)
    // But once it encounters newline or the buffer size is reached (if any one condition is satisfied), it will terminate
    // To read the entire file, put them under the loop
// fputs() - Writes a full string to a file
// frpintf() - Writes a formatted string to a file. You have fputc, fputs which is used to target a single datat type (c - character and s - string). But fprintf can be used for anything with one additional step using format specifier
    // Syntax: fprintf (file pointer name, "format specifiers",variable names)
// fseek() - It is used to set the position of the "cursor" within the file
    // It takes 3 arguments - fseek (file_pointer_name, offset, Origin_of_offset)
        // offset - by how many positions. It can be negative too (to move backwards)
        // origin:
            // SEEK_SET: From the beginning of the file.
            // SEEK_CUR: From the current position of the cursor.
            // SEEK_END: From the end of the file. (reverse)
    // Note: Index of the cursor starts at 0th position
    // You cant use fseek () in w and w+ modes as the contents will be erased when you open in that mode(duhhh)
// ftell() - Tells you at what position your cursor is
    // It returns an int value so can declare an int and store the value as follows
        int position;
        position  = ftell (file_pointer_name);
    // It can be useful to determine the number of the characters in a file when you used in combination with fseek ()
        fseek (file_pointer_name, 0, SEEK_END);
        printf ("%d", ftell (fp));
            // This will give the position of the last character in a file
    // Ignore this point if you are clear about ftell with respect to the position after reading a string.If there is an y confusion, then go through this point.
        // The ftell() function does not treat the null terminator ('\0') as a character when determining the current position within a file.
        // It gives you the position after the last character read, but before the null terminator. So, it effectively ignores the null terminator and positions the file pointer after the string's actual content.
// feof() - Tells you whether you have read to the end of a file
// ferror() - Indicates whether an error has occured in working with a file

// VERY IMPORTANT
// Read and Write functions in FILE has a special property. Ater reading the size of data (as the user specified), the pointer move to the next location unlike in normal functions where you move by incrementing some value.

// Writing in a file

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main ()
{
    FILE *fp = NULL;
    char str [50];
    fp = fopen ("abc.txt", "w");

    printf ("Enter the String: ");
    fgets(str, sizeof(str), stdin);

    for (int i = 0; i < strlen(str); i++)
        fputc(str[i], fp);
    fclose (fp);
}

// Reading from a file (character by character)
// It also check the number of lines in a file

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main ()
{
    FILE *fp = NULL;
    char ch;
    fp = fopen ("abc.txt", "r");
        // ch = fgetc (fp);
            // Now this will just read the first character from the file
        // printf ("%c\n",ch);
        // fclose (fp);
    // To read all the characters, use this under a loop
    int count = 1;
    while ((ch = fgetc(fp)) != EOF)
    // Here you are getting a character and storing it in C. Then youy are checking whether that character is equal to EOF. If not you can print.
    // See reading char by char is inefficient. So to make it effective we can read it line by line with fgets under a while loop or reading in chunks using fread
    {
        printf ("%c",ch);
        if (ch == '\n')
        {
            count++;
        }
    }
    printf ("Number of the lines in this file is %d", count)
     fclose (fp);
}

// Reading from a file (line by line)

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    FILE *fp = NULL;
    char str[30];
    fp = fopen("abcd.txt", "r+");

    char *result = NULL;
    while ((result = fgets(str, 5, fp)) != NULL)
    // Unlike with character you cant use that EOF condition
    // This is because EOF returns an integer and fgetc also returns an integer value of the character. So these two can be compared. But fgets returns a pointer to the first character of the string.
        // If it reads the EOF character, it returns -1
    // When fgets successfully reads a line of text from a file or stream, it stores the line (including the newline character '\n', if present) in a character array (string), and it returns a pointer to the beginning of that string.
    // If fgets encounters the end of the file (EOF) without reading any characters (for example, when the file is empty), it returns NULL to indicate that there is no more data to read.
    {
        printf("%s", str);
    }
    fputs("jenny", fp);

    fclose(fp);
}

// Copy the contents of a file from one to another

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    FILE *fp1 = NULL;
    FILE *fp2 = NULL;
    char str[30];

    fp1 = fopen("abc.txt", "r");
    if (fp1 == NULL)
    {
        printf("Error opening the file");
        exit(1);
    )

    fp2 = fopen("abcd.txt", "a");
    if (fp2 == NULL)
    {
        printf("Error opening the file");
        exit(1);
    )

    char *result = NULL;
    while ((result = fgets(str, 30, fp1)) != NULL)
    {
        fprintf(fp2, "%s", result);
    }

    fclose(fp1);
    fclose(fp2);
    printf("Successfully copied");
    }

// Other moders - r+, w+ and a+
// As you know, w mode will overwrite the content. r+ mode can be used to modify the contents by overwriting the required parts alone
// fopen cannot create a new file in r+ mode. It should already exists (duhh)
// It will replace the existing characters from the mouse pointer
// w mode (Write Mode) vs w+ mode (Write and Read Mode)
    // w mode:
        // You can only write to the file in "w" mode; reading from it will result in an error.
        // It's typically used when you want to create a new file or overwrite an existing file with fresh data.
    // w+ mode:
        //Like "w" mode, if the file already exists, opening it in "w+" mode will truncate its contents.
        // However, "w+" mode additionally allows you to read from the file.
            // This is generally tricky. Just think about it. You write the contents to the file and pointer will be located at the last charcater.
            // Now when you use the general while loop with EOF conidtion, it will fail.
            // To sort this out, you can use rewind (file_pointer_name) before before while loop so that pointer moves to the beginning of the file
// SImilar to w and w+ mode, a and a+ also has the same difference among.
    // Both will have cursor at the end of the file when you are trying to append.
    // But with a+, you can read the file too which isn't possisble with a mode.
    // To read, you need to use rewind function
    // fopen cannot create a new file in a+ mode too (like r+). It should already exists (duhh)

// Fix the errors in this file using valgrind
// This code is cappable of creating a new file
// That is when you execute this code as './create filename.c' it will create a new file with name 'filename'

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    // Check for improper usage, otherwise, get filename length
    if (argc != 2)
    {
        printf("Wrong usage: Try ./create [filename]\n");
        return 1;
    }
    int filename_length = strlen(argv[1]) + 1;
    // Error 1: Initially the code didn't have this + 1. It is necessary as strings have a NUL character at the end. In its absemce,
    // you will get an errro invalid write of 1 byte using valgrind since this NUL charcater in the memory which has not ben
    // allocated properly by you.

    // Create a new block of memory to store filename
    char *filename = malloc(sizeof(char) * filename_length);

    // Copy argv[1] into block of memory for filename
    sprintf(filename, "%s", argv[1]);
    // sprintf is a function that's used to format and store text data into a character array (string). It stands for "string
    // printf" and is similar to the printf function, which outputs formatted text to the console. However, instead of printing the
    // formatted text to the console, sprintf stores the formatted text in a provided character array.

    // Open new file under the name stored at filename
    FILE *new_file = fopen(filename, "w");

    if (new_file == NULL)
    {
        printf("Could not create file \n");
        return 1;
    }

    fclose(new_file);
    // Error 2: You didn't close the file initially
    free(filename);
    // Error 3: You didn't free memory which was allocated using malloc previoulsy
}

// Common memory errors:
// 1. Failing to free every block of memory which we've malloced.
// 2. Failing to close the file that we have opened.
// 3. Using more memory than we allocated.