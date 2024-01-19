// // Implements linear search for integers

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int numbers[] = {20, 500, 10, 5, 100, 1, 50};

    int n = get_int("Number: ");
    for (int i = 0; i < 7; i++)
    {
        if (numbers[i] == n)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

// // Implements linear search for strings

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{

    string strings[] = {"battleship", "boot", "cannon", "iron", "thimble", "top hat"};

    string s = get_string("String: ");
    for (int i = 0; i < 6; i++)
    // See that we have changed the condition i < 6 because we have just elements that are stored in the array.
    // But this is not an important piece of information that i am trying to convey here.
    // If it was 7 and if you had executed the program and provdedn the existing word when the prompts, you wont face any issues. It will just print as "Found"
    // On the other hand, if you had typed a word that is not existing you will encounter an error called 'segmentation fault'.
    // This is because you are trying top access a memory that is the beyond the scope of your allocation.
    // Here the for-loop should ideally run 6 times and exit the loop and print 'Not found'. But since i < 7, it will one more time and trying to run the loop in the memory that has not been allocated. (Remember there are 6 elements only in your arrays)

    {
        if (strcmp(strings[i], s) == 0)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}
// Break vs return:
// Break will exit the current loop and continue thereafter.
// Return will exit the current function under which it is used.
// Return values if when used under a function, specify whether the program was succesful / unsuccessful. Success/failure is not respect to compilation or execution but with respect to the purpose that the coder is trying to achieve through that function.
    // Lets say in a game, the user won the game, coder might specify return 0 and when the user has lost, retrun 1 might be used Every main function as a return value of 0 or 1.
    // This is with respect to compiling and execution. If successfully compiled, it returns 0. If not, it returns a non-zero value depending on the error which can checked using the command "echo$?".