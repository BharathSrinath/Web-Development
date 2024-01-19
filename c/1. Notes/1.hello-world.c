#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string first = get_string("whats your first name: ");
    string last = get_string("whats your last name: ");
    printf("Hello,%s %s\n", first, last);

    int x = get_int ("what's x? ");
    int y = get_int ("what's y? ");
    if (x < y)
    {
        printf ("x is less than y \n");
    }
    else if (x > y)
    {
        printf ("y is less than x \n");
    }
    else
    {
         printf ("x is equal to y \n");
    }
}
    // In printf and scanf 'f' means formatted
    // You should declare the data type (what type) is getting stored in the variable (int or char or string)
    // int need no quotes. char will be in single quotes and string will be in double quotes

    char c = get_char ("Do you agree? ");
    if (c == 'y' || c == 'Y')
    {
        printf("Agreed.\n");
    }
    else if (c == 'n' || c == 'N')
    {
        printf("Not agreed.\n");
    }

    // single equalto (=) means the value of right will be copied to the left. But if it is double equal to (==) then it means
    // x equalto y
    // || this means 'or'. when you want either of the inputs to be taken, you can use this. In this scenario n and y are case
    // sensitive. so we are using this.

    int i=3;
    while (i>0)
    {
        printf("You are unstoppable \n");
        i--;
    }

    // other way using while: i=0 and while (i<3) and i++;

    for (int i = 0; i < 3; i++)
    {
        printf("You are unstoppable \n");
    }

    // Semi-colons are generally used at the end command statemnet where you are commanding the computer to do something (not while
    // asking something like loops) like printf and scanf. One of the exceptions is uing them in between forloops.
    // for-loop functioning:
        // 1. Initialize i = 0;
        // 2. Check i < 3;
        // 3. print
        // 4. i++
        // 5. check i <3
        // 6. print and repeats the process until i<3 condition fails
    // Also the int i = 0 can be accessed only with in that loop. If you want to use it outside the loop, better initialize at the top.
    while (true)
    {
        printf("You are unstoppable \n");
    }

    // <stdbool.h> should be included to have boolean value like true or false. It can be 0 or 1 too. cs50 already has these variables.
    // so at this point no need to include. This code will be genertaed forever. To stop that use ctr+c where c here means cancel.

    const int n = 3;
    for (int i=0; i<n; i++)
    {
        for (int j=0; j<n; j++)
        {
            printf("#");
        }
        printf("\n");
    }

    // const is used so that its value can never be changed else where in the code. For an example if you usee n++ somewhere in the
    // code, it will still remain at 3. First for loop is for the number of rows and second for loop is for the number of elements
    // in a single row. Here you have declaring the value of n at the top rather than mentioning i<3 and j<3 because the number
    // elements in a row and number of rows both are same. Picture a square in your mind. If you want it to be a rectangle, then
    // this method will not work. This code be improved even more as below.

    const int n = get_int("size: ");
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }

    // Below we are trying to add a prompt to the user to enter to positive number. At the same time we are trying to write the most
    // effective code without repeating anything as much as we can.

    int n;
    do
    {
        n = get_int("Size: ");
    }
    while (n < 1);

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }

    // int, long, float and double
    // To print a int, you should use %i

    {
        int x = get_int("x: ");
        int y = get_int("y: ");
        printf("%i\n", x + y);
    }

    // To print a long, you should use %li

    {
        long x = get_long("x: ");
        long y = get_long("y: ");
        printf("%li\n", x + y);
    }

    // WHen comes to fraction should start using float and %f

    {
        long x = get_long("x: ");
        long y = get_long("y: ");
        printf("%li\n", x / y);
    }
    {
        long x = get_long("x: ");
        long y = get_long("y: ");
        float z = (float) x / (float) y;
        printf("%f\n", z);
    }

    // Here, % is called the placeholder and i, f, li, etc. are called the indicators of data types and whatever that is outside the quote is called value. Also, % and i together are known as format code.
    // Different values can be stored in a single statemnet by separating the values with comma.
    // Types and fomat cdoes:
    // Numbers: int, long, float (%f) and double (%f)
    // Text: char (%c) and string (%s)

    // You can even specify the number of decimal points (preeceded by a dot) that you need between % symbol and f symbol => %.5f
    // Floating points have imprecision. After certain digits correct fraction they start throwing random numbers.
    // This problem exists with double too. But it can give right fraction for even more sopme digits.

    {
        long x = get_long("x: ");
        long y = get_long("y: ");
        float z = (float) x / (float) y;
        printf("%.20f\n", z);
    }
    {
        long x = get_long("x: ");
        long y = get_long("y: ");
        double z = (double) x / (double) y;
        printf("%.20f\n", z);
    }

// Create a valid triangle in which length of 2 sides of should always be greater than the third side and sides should be positive.

#include <cs50.h>
#include <stdio.h>

bool valid_triangle(int a, int b, int c);

int main(void)
{
    int x, y, z;
    do
    {
        x = get_int("Enter the length of side 1: ");
        y = get_int("Enter the length of side 2: ");
        z = get_int("Enter the length of side 3: ");
    }
    while (x < 1 || y < 1 || z < 1);
    bool result = valid_triangle (x, y, z);
    printf("%i\n", result);
}
bool valid_triangle(int a, int b, int c)
{
    if (a + b > c && b + c > a && a + c > b)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// You could have used the same variable x, y and z in both main and valid_traingle functions. But the best practice is to use different variables for different functions.
