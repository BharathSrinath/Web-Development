#include <stdio.h>
#include <string.h>

int main()
{
    char s[30], srev[30];
    printf("Enter string: ");
    fgets(s, sizeof(s), stdin);
    
    // logic 1
    int length = strlen (s) - 1;
    // This -1 is crucia for this line ' srev[length - i] = s[i];' If you dont -1 it will result in s [7] for Bharath. But Bharath has to be stored from s[0] to s[6] only. 
    for (int i = 0; i <= length; i++)
    {
        srev[length - i] = s[i];
    }
    srev[length + 1] = '\0';
    printf("Reversed string is : %s", srev);

    // logic 2
    
    // int length = strlen(s);
    // char temp;

    // for (int i = 0; i < length / 2; i++)
    
    // Here rather reversing the netore string, we are basically after finding the middle path. For 7 letter string, 7/2 = 3 (for an int) and the loop will run 3 times swapping 1 and 7, 2 and 6 and finally 3 and 5. For an 8 letter string, 8/2 = 4 and the loop will run 4 times swapping 1 and 8, 2 and 7, 3 and 6 and finally 4 and 5.

    // {
    //     temp = s[i];
    //     s[i] = s[length - i - 1];
    //     s[length - i - 1] = temp;
    // }

    // printf("Reversed string is : %s", srev);

}