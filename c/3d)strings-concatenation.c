// Concatenation of two strings

#include <stdio.h>
#include <string.h>

int main ()
{
    char first_name [30], last_name [30];
    printf ("Enter you first name: ");
    fgets (first_name, sizeof(first_name), stdin);
    first_name[strcspn(first_name, "\n")] = '\0';  // To remove the new line
    
    printf ("Enter you last name: ");
    fgets (last_name, sizeof(last_name), stdin);

    int first_name_length = strlen (first_name);
    int last_name_length = strlen (last_name);

    for (int i = 0; i < last_name_length + 1; i++)
    // i should be less than source string and +1 is to include the null character at the end
    {
        first_name [first_name_length + i + 1] = last_name [i];
    }
    strcat (first_name, last_name);
    strncat (first_name, last_name, 3);
    printf ("%s", first_name);
}

// Concatenation using 'strcat' can be done by strcat (s1, s2). Another function strncat (s1, s2, n) which can be used to limit the number of charcaters that you want to concatenate. If it is 4, The output will be BharathSrin
// Instead of above forloop you can use this function.
// Just like scanf and gets, stcat will also doesn't check for buffer overflow.     
    // strcat (destination_string, source_string) where even if the destination_string is not large enough to accomodate both strings, it will still perform the action that could lead to overflow.

