#include <cs50.h>
#include <stdio.h>
#include <string.h>

const int BITS_IN_BYTE = 8;

void print_bulb(int bit);

int main(void)
{
    // TODO
    string text = get_string("Enter the text: ");
    for (int i = 0, length = strlen(text); i < length; i++)
    {
        char s[BITS_IN_BYTE];
        for (int j = 0; j < BITS_IN_BYTE; j++)
        {

            s[j] = text[i] % 2;
            text[i] = text[i] / 2;
        }
        for (int j = BITS_IN_BYTE; j >= 0; j--)
        {
            print_bulb(s[j]);
        }
        printf("\n");
    }
}
void print_bulb(int bit)
{
    if (bit == 0)
    {
        // Dark emoji
        printf("\U000026AB");
    }
    else if (bit == 1)
    {
        // Light emoji
        printf("\U0001F7E1");
    }
}