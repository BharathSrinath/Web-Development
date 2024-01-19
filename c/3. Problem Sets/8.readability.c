#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

int letters_count(string letters);
int words_count(string words);
int sentence_count(string sentence);

int main(void)
{
    string paragraph = get_string("Text: ");
    // printf("%s\n", paragraph);
    float x = letters_count(paragraph);
    // printf("Number of letters: %f\n", x);
    float y = words_count(paragraph);
    // printf("Number of words: %f\n", y);
    float z = sentence_count(paragraph);
    // printf("Number of sentences: %f\n", z);
    float l = (x * 100 / y);
    // printf("Value of L: %f\n", l);
    float s = (z * 100 / y);
    // printf("Value of S: %f\n", s);
    float index = (0.0588 * l) - (0.296 * s) - 15.8;
    int index_roundoff = round(index);
    if (index < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (index > 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        // printf("Grade %f\n", index);
        printf("Grade %i\n", index_roundoff);
    }
}
int letters_count(string letters)
{
    int count = 0;
    for (int i = 0, length = strlen(letters); i < length; i++)
    {
        if (isupper(letters[i]) || islower(letters[i]))
        {
            count++;
        }
    }
    return count;
}
int words_count(string words)
{
    int counter = 0;
    for (int i = 0, length = strlen(words); i < length; i++)
    {
        if (words[i] == ' ')
        {
            counter++;
        }
    }
    return counter + 1;
}

int sentence_count(string sentence)
{
    int count = 0;
    for (int i = 0, length = strlen(sentence); i < length; i++)
    {
        if (sentence[i] == '.' || sentence[i] == '!' || sentence[i] == '?')
        {
            count++;
        }
    }
    return count;
}