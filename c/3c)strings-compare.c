#include <stdio.h>
#include <string.h>

int main()
{
    char s1[30], s2[30];
    printf("Enter string1: ");
    fgets (s1, sizeof(s1), stdin);

    printf("Enter string2: ");
   fgets (s2, sizeof(s2), stdin);

    int flag = 0;
    for (int i = 0; s1[i] != '\0' || s2[i] != '\0'; i++)
    // Very simple condition. Strings last character is NUL. So this for-loop will go on until any one of the string reaches NUL
    {
        if (s1[i] != s2[i])
        {
            flag = 1;
            break;
            // break will exit the for-loop
        }
    }
    if (flag == 1)
        printf("Strings are not same");
    else
        printf("Strings are same");

    // You can simply use the following
    // if (strcmp(s1, s2) == 0)
    //     printf("Strings ar same");
    // else
    //     printf("Strings are not same");
}