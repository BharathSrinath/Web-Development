#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// int convertStringToInt(string input);
string plain_to_cipher(string plaintext, int n);
int number;

int main(int argc, string argv[])
{
    // Check if the program was run with just one command-line argument
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // Make sure every character in argv[1] is a digit
    string input = argv[1];
    for (int i = 0, n = strlen(input); i < n; i++)
    {
        if (!isdigit(input[i]))
        // Just like checking upper case or lower case, you have something called isdigt to check whether the entered value is a
        // number or not
        {
            printf("Please enter a valid number.\n");
            return 1;
        }
    }

    // Convert argv[1] from a `string` to an `int`
    // number = convertStringToInt(argv[1]);
    number = atoi(argv[1]);

    // Now you can use 'number' as an integer in your program
    printf("The integer value is: %d\n", number);

    string plain = get_string("Plaintext:   ");
    string cipher = plain_to_cipher(plain, number);
    printf("Ciphertext:  %s\n", cipher);
}

// We have used a function called atoi with stdlib.h to convert the string to int. Lets say that you weren't allowed use atoi in an
// interview. Then the following logic will help you dod that. int convertStringToInt(string input)
// {
//     int result = 0;
//     for (int i = 0; input[i] != '\0'; i++)
//     {
//         result = result * 10 + (input[i] - '0');
//     }
//     return result;
// }

string plain_to_cipher(string plaintext, int n)
{
    int length = strlen(plaintext);
    for (int i = 0; i < length; i++)
    {
        if (isupper(plaintext[i]))
        {
            plaintext[i] = plaintext[i] - 65;
            int c = (plaintext[i] + n) % 26;
            plaintext[i] = c + 65;
        }
        if (islower(plaintext[i]))
        {
            plaintext[i] = plaintext[i] - 97;
            int c = (plaintext[i] + n) % 26;
            plaintext[i] = c + 97;
        }
    }
    return plaintext;
}