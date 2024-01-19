// One issue with Array:

bool truthtable [10];
truthtable[2] = false;
if (truthtable[7] == true)
{
    printf ("TRUE!\n");
}
truthtable[10] = true;

// Look carefully in this snippet. First line declares a variable named truthtable with data-type as bool and it can hold 10 boolean values at indices 0 to 9.
// next few lines of code assigns an individual value to the truthtable[2] and has an if condition for truthtable[7]. No issues here.
// But in the last line when assign truthtable[10] a value, the code will still execte but you will face a segmentation error because the element position is out-of bounds.
// A segmentation fault, often abbreviated as "segfault," is a type of error that occurs in computer programs when a process attempts to access a memory location that it is not allowed to access. This violation is usually due to programming errors and can cause the program to terminate abruptly.

// Multi-dimenstional arrays
// bool battleship [10][10];
// You can imagine this as a 10 X 10 grid but in memeory it will stored as 100 element one-dimenstional array
// This example is a 2D array and these are nothing but the matrix

// Most important thing in an array
// we can't treat entire arrays themselves as variables. For example, we cannot assign one array to another array using the assignment operator.
// This will not work (It will work in modern languages though)
    int a [5] = {1,2,3,4,5};
    int b [5];
    b = a;
// If we want to do that,  we actually need to use a loop to copy over each individual element one at a time.
    int a [5] = {1,2,3,4,5};
    int b [5];
    for (int j = 0; j < 5; J++)
    {
         b [j] = a [j]
    }


// Another unique property to an array
// Most variables in C are passed by value in function calls. This means that a local copy of the variable is created within the function, and any changes made to the parameter within the function do not affect the original variable in the calling code. The function operates on its local copy.
// In arrays though they are passed by reference. That is the callee (the function that makes the call) receives the actual array itself and not the copy. This means that the function receives a reference (memory address) to the original array, and any changes made to the array elements within the function directly affect the original array in the calling code.
    // Because arrays in real time situations are very long. So making a copy will be cumbersome.
    // So C trusts the callee and not to mess up the actual arrays that it receives.
// Below is one of the most important examples to understand this.
    // This also an example to pass array as arguments

#include <stdio.h>
#include <cs50.h>

void set_array (int array [4]);
void set_int (int x);
// Both cant receive any values since their return type is void
// Also note that you actually do not need to write the name of the variable and the size the function declaration (Only data-type is mandatory). You just need them in the function definition. But this makes the code much more readable. So please do use them.

int main (void)
{
    int a = 10;
    int b [4] = {0, 1, 2, 3 };
    set_int(a);
    set_array(b);

// Generally we call the function and get the value and assign the values to another variable. Ex: int c = set_int (a);
// But since we are dealing with arrays and call by reference will directly alter the original value we have declared the return type as void (as no values needs to returned). Hence this also means that there is no need of any variable like 'c' to store the new value as they are altered with in the existing variable itself.

    printf ("%i\n%i\n", a, b[0]);
    // printf ("%i\n%i\n", c, d);
}
void set_array (int array [4])
// On the other hand in an array, set_array(b) has not passed a copy rather passed its original memory address. So this function is actually woirking on the actual memory address itself. Hence when value has changed as 22 in the next line of code, the original value in the main function is also changed to 22.
{
    array [0] = 22;
}
void set_int (int x)
// Now set_int (a) with a value 10 is being passed here. Now this function simply creates a local copy of the value 10 and assign it to x. Then the next line changes the value to 22. All of them are happening with the copy created by this function.
{
     x = 22;
     printf("The value of x is: %d\n", x);
}


#include <stdio.h>
int main(void)
{
    int score1 = 72;
    int score2 = 73;
    int score3 = 33;

    printf("Average: %f\n", (score1 + score2 + score3) / 3);
}

// This code will not be executed due to the mismatch between %f and integer types - scores
// To make it work either you can specify 3 as "(float) 3" or as "3.0"
// Even if one number becomes a float, the entire operation will be cosnidered a float

// Re-wrting the same code using arrays

int main(void)
{
    int scores[3];
    scores[0] = 72;
    scores[1] = 73;
    scores[2] = 33;

    printf("Average: %f\n", (scores[0] + scores[1] + scores[2]) / 3.0);
}

// You can also prompt the user to get the score using get_int by replacing the numbers.
// To make it effective further you can use a loop as follows

for (int i = 0; i < 3; i++)
{
    scores[i] = get_int("Score: ");
}

// When you create an array in C, it is just a block of consecutive memory locations reserved for storing elements of the same data type. However, C does not store any information about the size of the array within the array itself.
// Example: int myArray[5];
    // Here C will allocate memory for five integers, one after the other, but it doesn't remember that the array has a length of 5.
// The length is remembered by using a separate variable to store the length, like this:
    // int myArray[5];
    // int length = 5;
// Now, you can use the length variable to control loops or to access elements within the valid range of the array.
// Implementing the above lessons in below code.

#include <cs50.h>
#include <stdio.h>

// Constant
const int N = 3;

// Prototype
float average(int length, int array[]);

int main(void)
{
    // Get scores
    int scores[N];
    for (int i = 0; i < N; i++)
    {
        scores[i] = get_int("Score: ");
    }

    // Print average
    printf("Average: %f\n", average(N, scores));

    // Here average (N, scores) is calling this function "float average(int length, int array[])"  Here N will is assigned to int length and scores value are ssigned to int array[].
}

float average(int length, int array[])
{
    // Calculate average
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += array[i];
    }
    return sum / (float) length;
}

// Strings
// They are known as the 'Array of characters'. Because you can store one character using char. In string you can store one character after another in a sequence just like an array.
// Example Syntax: char name [] = {'E', 'M', 'M', 'A', '\0'}; This can be done using string name = emma; with a cs50.h
// Array and strings make sure that everything is stored one after the other. String stores the characters in a sequence.
// String occupy one extra space after the last character. This extra space is occupied by 'NUL character' (\0).
    // We can put this in other way. Strings are enclosed in double quotes. They will have NUL character at the end. This will help the C to know where the string ends,
    // char on the other hand is enclosed in single quotes. They dont have any such character at the end.
// We can also use strings of arrays to keep track of arrays length.
    // char myString[] = "Hello";
// This can help you to find the length
// But remember you can figure out the length of string but not the length of array of strings.

int main(void)
{
    // Prompt for user's name
    string name = get_string("Name: ");

    // Count number of characters up until '\0' (aka NUL)
    int n = 0;
    while (name[n] != '\0')
    // name[n] means that n = 0,1,2,3 and so on and until the conidition finds the nul character
    // This is what actually goes behind strlen function
    {
        n++;
    }
    printf("%i\n", n);
}

// Remember that arrays in general doesn't have nul character. Only strings do.
// Okay then, the above code is simplified below by strlen function for which you have to include string.h header file

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Prompt for user's name
    string name = get_string("Name: ");
    int length = strlen(name);
    printf("%i\n", length);
}

// Basic program to store name and mobile number

#include <cs50.h>
#include <stdio.h>

int main (void)
{
    string name = get_string ("What's your name? ");
    int age = get_int ("What's your age? ");
    // long phone = get_long ("phone: ");
    string phone = get_string ("Enter your mobile number: ");
    // We are storing this as string because, a phone will have extensions (like a country code) and you have to include paranthesis for them. Also, int or long will ignore the ninitial zeroes in a number which are very common in a phone number.
    printf("Name is %s\nAge is %i\nPhone number is %s\n", name,age,phone);
}

// Uppercases a string

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    for (int i = 0, i <  strlen(s); i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            printf("%c", s[i] - 32);
            // -32 is the difference between small letters and capital letters in ASCII. In ASCII small letters comes after capital letters. That is why we are subtratting. If it was other way around we would be added 32.
        }
        else
        {
            printf("After:  %c", s[i]);
        }
    }
    printf("\n");
}

// Yet again. You don't need all these calculations. All you need is a library, ctype.h
// It has functions to transform one case to another.

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    printf("After:  ");
    for (int i = 0, i <  strlen(s); i++)
    {
        if (islower(s[i]))
        {
            printf("%c", toupper(s[i]));
        }
        else
        {
            printf("%c", s[i]);
        }
    }
    printf("\n");
}

// The function that changes the case are effective enough to know that if you type an uppercase letter and asked it to change to uppercase, it will leave them unchanged. Hence in the above program you do not need the if else condition at all. Here is the simplified code.

int main(void)
{
    string s = get_string("Before: ");
    printf("After:  ");
    for (int i = 0, i <  strlen(s); i++)
    {
        printf("%c", toupper(s[i]));
    }
    printf("\n");
}

// This step makes the code slightly efficient

int main(void)
{
    string s = get_string("Before: ");
    printf("After:  ");
    for (int i = 0, n = strlen(s); i < n; i++)
    // Rather asking the length everytime in the for-loop (which is actually required only once in this case), we are declaring another variable called 'n' and storing the strlen in that variable. now strlen value once obtained by the users input will sbe stored in 'n'. From now on we will be asking whether i < n and not calling strlen again and again.
    {
        printf("%c", toupper(s[i]));
    }
    printf("\n");
}

// Check if a lowercase string's characters are in alphabetical order. If yes print "yes", else "no"

#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main (void)
{
    string name = get_string("Enter the word ");
    int length = strlen (name);
    printf("%i\n",length);
    for (int i = 0; i < length-1; i++)
    {
        if (name[i] > name[i+1])
        // You are basically asking is character 'a' greater than character 'b'. Here C will look them as ASCII values.
        {
            printf ("No\n");
            return 0;
            // If the if condition is true even once in the liefetime of this for-loop, it will be printed no and exits the function (main function in this scenario) (return 0).
        }
    }
    printf ("Yes\n");
    // After going through the loop, (i.e., if the 'if' condition is not satisfied, it will come out of the for-loop an dexecute this line of code )
}

// Creating a program that will prompt the user to enter a secret phrase and if entered coreectly, it will say "please come in".

#include <stdio.h>
#include <cs50.h>
#include <string.h>

bool check_phrase (string phrase);

int main (void)
{
    string phrase = get_string ("Enter the secret phrase ");
    bool correct = check_phrase (phrase);
    if (correct == true)
    {
        printf ("come on in buddy!\n");
    }
    else
    {
        printf ("Wrong Paasword\n");
    }
}

bool check_phrase (string phrase)
{
    string password = "Please";
    if (strcmp(phrase, password) == 0)
    {
        return true;
    }
    // Using == operator in string is not possible.
    // In C, when you define a string using double quotes, like "hello", it is treated as a character array. An array in C is essentially a pointer to the first element of the array. When you use the == operator with arrays (including strings), you are comparing the addresses of the first elements, not the actual content of the arrays.
    else
    {
        return false;
    }
}

// Create a program that prompts the user for a size, n. Dynamically create an array for that size. where each element is two times the previous one. Start array at 1. Print the array one by one.

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int length;
    do
    {
        length = get_int("Enter the length: ");
    }

    while (length < 1);

    int twice[length];
    twice[0] = 1;
    printf("%i\n", twice[0]);
    // The above two lines exist because when you start the for-loop with int = 0, it will lead to the position of twice [-1] where we dont know value the computer has stored. When you ran the program it was 0. so 2*0 becomes 0 again. so in the position of twice[0], the value 0 is will be stored rather than value 1. To avoid this we have declared the twice [0]'s value to be 1 and begaan the for-loop with i = 1.
    for (int i = 1; i < length; i++)
    {
        twice[i] = 2 * twice[i - 1];
        printf("%i\n", twice[i]);
    }
}

// Concpet of strings after learning memory
// There is no keyword called string in C language. It just exists in CS50 library.
// Without the library, you can use string only as array of characters.
    char s[] = "Hello, world!";
    // If you are going to get the value from the user,
        char s[100];
        printf("Enter a string: ");
        scanf("%s", s);
        printf("You entered: %s\n", s);
