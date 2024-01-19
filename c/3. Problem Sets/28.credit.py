def main():
    while True:
        credit_card_number_current = input("Enter your Credit Card Number: ")
        if credit_card_number_current.isdigit() and int(credit_card_number_current) > 0:
            break

    credit_card_number_initial = int(credit_card_number_current)
    credit_card_number_final = int(credit_card_number_current)
    second_digit = 0
    sum_of_second_digits = 0
    counter_second_digits = 0

    credit_card_number_current = int(credit_card_number_current) // 10
    second_digit = int(credit_card_number_current) % 10
    second_digit *= 2

    if second_digit > 9:
        second_digit -= 9

    sum_of_second_digits += second_digit

    while credit_card_number_current > 1:
        credit_card_number_current = int(credit_card_number_current) // 100

        if (
            (credit_card_number_current > 9) and (credit_card_number_current < 100)
        ) or (
            (credit_card_number_current * 2 > 9)
            and (credit_card_number_current * 2 < 19)
        ):
            second_digit = int(credit_card_number_current) % 10
            second_digit *= 2

            if second_digit > 9:
                second_digit -= 9

            sum_of_second_digits += second_digit
            counter_second_digits += 1

        elif credit_card_number_current < 10:
            sum_of_second_digits += int(credit_card_number_current) * 2
            counter_second_digits += 1

        else:
            second_digit = int(credit_card_number_current) % 10
            second_digit *= 2

            if second_digit > 9:
                second_digit -= 9

            sum_of_second_digits += second_digit
            counter_second_digits += 1

    first_digit = 0
    sum_of_first_digits = 0
    counter_first_digits = 0

    while credit_card_number_initial > 1:
        first_digit = int(credit_card_number_initial) % 10
        credit_card_number_initial = int(credit_card_number_initial) // 100
        sum_of_first_digits += first_digit
        counter_first_digits += 1

    counter = counter_second_digits + counter_first_digits
    sum_of_digits = sum_of_second_digits + sum_of_first_digits

    if sum_of_digits % 10 == 0:
        if (counter == 15) and (
            (credit_card_number_final // 10000000000000 == 34)
            or (credit_card_number_final // 10000000000000 == 37)
        ):
            print("AMEX")
        elif (counter == 16) and (
            (credit_card_number_final // 100000000000000 in range(51, 56))
        ):
            print("MASTERCARD")
        elif (
            (counter == 13 or counter == 16)
            and (credit_card_number_final // 1000000000000000 == 4)
        ) or (
            (counter == 13 or counter == 16)
            and (credit_card_number_final // 1000000000000 == 4)
        ):
            print("VISA")
        else:
            print("INVALID")
    else:
        print("INVALID")


if __name__ == "__main__":
    main()
