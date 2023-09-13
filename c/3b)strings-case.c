//  Uppercases a string

#include <stdio.h>
#include <string.h>

int main(void)
{
    char s [30];
    printf ("Enter a word: ");
    fgets(s, sizeof(s), stdin);

    printf ("Before conversion: %s", s);

    for (int i = 0; i < strlen(s); i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            printf("%c", s[i] - 32);
            // -32 is the difference between small letters and capital letters in ASCII. In ASCII small letters comes after capital letters. That is why we are subtratting. If it was other way around we would be added 32.
        }
        else
        {
            printf("After conversion:  %c", s[i]);
        }
    }
    printf("\n");
}
