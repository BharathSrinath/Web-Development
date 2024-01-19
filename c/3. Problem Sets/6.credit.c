#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long long int credit_card_number_current;
    do
    {
        credit_card_number_current = get_long_long("Enter the your Credit Card Number: ");
    }
    while (credit_card_number_current < 1);
    long long int credit_card_number_initial = credit_card_number_current;
    long long int credit_card_number_final = credit_card_number_current;
    int second_digit = 0, sum_of_second_digits = 0;
    int counter_second_digits = 0;
    credit_card_number_current /= 10;
    second_digit = credit_card_number_current % 10;
    second_digit *= 2;
    if (second_digit > 9)
    {
        second_digit -= 9;
    }
    sum_of_second_digits += second_digit;
    while (credit_card_number_current > 1)
    {
        credit_card_number_current /= 100;
        if (((credit_card_number_current > 9) && (credit_card_number_current < 100)) ||
            ((credit_card_number_current * 2 > 9) && (credit_card_number_current * 2 < 19)))
        {
            second_digit = credit_card_number_current % 10;
            second_digit *= 2;
            if (second_digit > 9)
            {
                second_digit -= 9;
            }
            sum_of_second_digits += second_digit;
            // printf("%i\n", sum_of_second_digits);
            counter_second_digits++;
        }
        else if (credit_card_number_current < 10)
        {
            sum_of_second_digits += credit_card_number_current * 2;
            counter_second_digits++;
            // printf("%i\n", sum_of_second_digits);
        }
        else
        {
            second_digit = credit_card_number_current % 10;
            second_digit *= 2;
            if (second_digit > 9)
            {
                second_digit -= 9;
            }
            sum_of_second_digits += second_digit;
            // printf("%i\n", sum_of_second_digits);
            counter_second_digits++;
        }
    }
    // printf("sum of second digits %i\n", sum_of_second_digits);
    // printf("counter second digits %i\n", counter_second_digits);
    int first_digit = 0, sum_of_first_digits = 0;
    int counter_first_digits = 0;
    do
    {
        first_digit = credit_card_number_initial % 10;
        credit_card_number_initial /= 100;
        sum_of_first_digits += first_digit;
        counter_first_digits++;
    }
    while (credit_card_number_initial > 1);
    // printf("sum of first digits %i\n", sum_of_first_digits);
    // printf("counter first digits %i\n", counter_first_digits);
    int counter = counter_second_digits + counter_first_digits;
    // printf("total counter %i\n", counter);
    int sum = sum_of_second_digits + sum_of_first_digits;
    // printf("sum of first and second digits %i\n", sum);
    if (sum % 10 == 0)
    {
        if ((counter == 15) &&
            ((credit_card_number_final / 10000000000000 == 34) || (credit_card_number_final / 10000000000000 == 37)))
        {
            printf("AMEX\n");
        }
        else if ((counter == 16) &&
                 ((credit_card_number_final / 100000000000000 == 51) || (credit_card_number_final / 100000000000000 == 52) ||
                  (credit_card_number_final / 100000000000000 == 53) || (credit_card_number_final / 100000000000000 == 54) ||
                  (credit_card_number_final / 100000000000000 == 55)))
        {
            printf("MASTERCARD\n");
        }
        else if (((counter == 13) || (counter == 16)) &&
                 ((credit_card_number_final / 1000000000000000 == 4) || (credit_card_number_final / 1000000000000 == 4)))
        {
            printf("VISA\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}