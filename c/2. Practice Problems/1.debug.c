// Learn to debug buggy code

#include <cs50.h>

int main(void)
{
    // Ask for your name and where live
    name = get_string("What is your name? ")
    location = get_string("Where do you live? ")

    // Say hello
    print("Hello, %i, from %i!", name, location)
}

// Corrected code:

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Ask for your name and where live
    string name = get_string("What is your name? ");
    string location = get_string("Where do you live? ");

    // Say hello
    printf("Hello, %s, from %s!\n", name, location);
}

// Debugging: Command is debug50 filename
// When hover to the left (line numbers) in a code, you will see a red dot and when you click at a place where you believe there might be a problem, it will be highlighted when you run debug
//Left pane will show the variables and their changing values
// At the top you will have buttons to that proceed with program at a very slow pace rather going at computer speed. when you move forward with every line and if any variables value changes, it will shown in the left pane.
// Debugger doesn't point you the errors. Rather it slows down the pace and helps you to check what is happening at the every line of code.