// Enumerations (Enums):
    // They provide a way to create a set of related named values, which can make your code more readable and maintainable.
    // They are implicitly assigned integer values starting from 0 by default, and each subsequent value is incremented by 1.
    // Enums are type-safe, meaning the compiler checks that you only use valid enum values, preventing unintended assignments.
    // Enums are scoped, so you can have enum types with the same name in different scopes without conflicts.
    // The structure is simialr in appearance to 'struct' in C but both serve entirely different purpose.
    // Example:
        typedef enum
        {
            RED,
            BLUE,
            GREEN,
        // You use commas instead of semi-colon for enums
        }colors;
        // Under main
            color a = RED;
            color b = BLUE;
            // and so on. But just remmber that you can only assign values that are defined above under enum
    // Compiler will automatically assign values to the contents inside enum from 0 to n. So if i print
        printf ("%d", RED);
            // 0 will be printed
        // But you can assign your own values too
            // Lets say you have assigned RED to be 2 like RED = 2, then BLUE will become 3 and GREEN will become 4.
            // You can even assign random value like RED  = 5, BLUE = 7; GREEN = 11 and so on
    // Within the same scope, if you are using 2 enums, their contents cannot be repeated.
        typedef enum
        {
            RED,
            BLUE,
            GREEN,
        }Primary_colors;

         typedef enum
        {
            RED,
            YELLOW,
            GREEN,
        }traffic_colors;
    // This is now allowed where red and and green repeating under a same scope
    // But one enum within another enum is allowed.
         typedef enum
        {
            RED,
            traffic_colors,
            GREEN,
        }colors;
    // Most commonly used in switch cases statemnets where instead usin case 0,1,2,3,4,etc. you can use more understandable terms.

#include <stdio.h>

// Define an enum for days of the week
typedef enum {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
} DayOfWeek;

int main() {
    int userInput;
    DayOfWeek favoriteDay;

    // Prompt the user to enter a number corresponding to a day
    printf("Enter your favorite day of the week (0-6):\n");
    scanf("%d", &userInput);

    // Check if the user input is valid
    if (userInput >= 0 && userInput <= 6) {
        favoriteDay = (DayOfWeek)userInput;

        // Display the corresponding day
        switch (favoriteDay) {
            case SUNDAY:
                printf("Your favorite day is Sunday!\n");
                break;
            case MONDAY:
                printf("Your favorite day is Monday!\n");
                break;
            case TUESDAY:
                printf("Your favorite day is Tuesday!\n");
                break;
            case WEDNESDAY:
                printf("Your favorite day is Wednesday!\n");
                break;
            case THURSDAY:
                printf("Your favorite day is Thursday!\n");
                break;
            case FRIDAY:
                printf("Your favorite day is Friday!\n");
                break;
            case SATURDAY:
                printf("Your favorite day is Saturday!\n");
                break;
        }
    } else {
        printf("Invalid input. Please enter a number between 0 and 6.\n");
    }

    return 0;
}

// Macros:
    // They perform text substitution in your code before compilation.
    // They are typically defined using #define.
    // Macros are not type-safe because they don't have a specific data type associated with them. They are simply text replacements.
    // Macros are not scoped; they are global and can cause naming conflicts if not carefully named.
    // Example:
        #define PI 3.14159265359
        int circleArea = PI * radius;
        #undef PI
            // This will undefine the defined macro
    // Predefined Macros that are generally used in C

#include <stdio.h>

int main()
{
    printf("File Name: %s\n", __FILE__);
    printf("Line: %d\n", __LINE__);
    printf("Compilation Date: %s\n", __DATE__);
    printf("Compilation Time: %s\n", __TIME__);
    return 0;
}







