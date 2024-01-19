#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

string plain_to_cipher(string plaintext, string argv[1]);

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }
    int length_arg = strlen(argv[1]);
    if (length_arg != 26)
    {
        printf("Key must contain 26 characters.\n");
        return 1;
    }

    bool used[26] = {false};
    // Get used to these kind of arguments. It is basically saying that the an array variable called 'used' is a boolean  and can
    // hold 26 values. Al these values are set to false initially.
    for (int i = 0; i < length_arg; i++)
    {
        char ch = tolower(argv[1][i]);
        // Converting everything to lower or upper so that we can subtract them with a const value. If you dont do this, there is a
        // possibility of index being same after subtracting the constant for different alphabets. Detailed explanation: bool
        // used[26] = {false};: This line declares an array called used with 26 elements, where each element is of type bool (either
        // true or false). The purpose of this array is to keep track of whether each alphabet has been seen in the key or not. We
        // initialize all elements to false, indicating that no alphabet has been seen initially. used[ch - 'a']: It checks if the
        // current alphabet ch has already been seen before. The expression ch - 'a' calculates an index representing the position
        // of the alphabet in the array used. If used[ch - 'a'] is true, it means the alphabet has been seen before in the key
        // (repeating character), so we print an error message and return from the program with a value of 1. used[ch - 'a'] =
        // true;: If the character passes the checks above, it means it's a valid and unique alphabet in the key. So, we mark the
        // corresponding element in the used array as true to indicate that this alphabet has been seen.
        if (!isalpha(ch) || used[ch - 'a'])
        {
            printf("Key must contain 26 unique alphabetic characters.\n");
            return 1;
        }
        used[ch - 'a'] = true;
    }
    string plain = get_string("Enter the text: ");
    string cipher = plain_to_cipher(plain, argv);
    printf("ciphertext: %s\n", cipher);
}

string plain_to_cipher(string plaintext, string argv[1])
{
    for (int j = 0; j < 26; j++)
    {
        if (isupper(argv[1][j]))
        {
            argv[1][j] = argv[1][j] - 65;
        }
        else if (islower(argv[1][j]))
        {
            argv[1][j] = argv[1][j] - 97;
        }
    }
    for (int i = 0, length_plain = strlen(plaintext); i < length_plain; i++)
    {
        int count = 0;
        if (isupper(plaintext[i]))
        {
            plaintext[i] = plaintext[i] - 65;
            for (int j = 0; j < plaintext[i]; j++)
            {
                count++;
            }
            plaintext[i] = argv[1][count] + 65;
        }
        else if (islower(plaintext[i]))
        {
            plaintext[i] = plaintext[i] - 97;
            for (int j = 0; j < plaintext[i]; j++)
            {
                count++;
            }
            plaintext[i] = argv[1][count] + 97;
        }
    }
    return plaintext;
}