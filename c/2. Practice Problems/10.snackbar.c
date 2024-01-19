// Practice using structs
// Practice writing a linear search function

/**
 * Beach Burger Shack has the following 10 items on their menu
 * Burger: $9.5
 * Vegan Burger: $11
 * Hot Dog: $5
 * Cheese Dog: $7
 * Fries: $5
 * Cheese Fries: $6
 * Cold Pressed Juice: $7
 * Cold Brew: $3
 * Water: $2
 * Soda: $2
 */

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <strings.h>

// Number of menu items
#define NUM_ITEMS 10

// Menu items have item name and price
typedef struct
{
    string item;
    float price;
} menu_item;

// Array of menu items
menu_item menu[NUM_ITEMS];

// Add items to the menu array
void add_items(void);

// Calculate the total cost
float get_cost(string item);

int main(void)
{
    add_items();

    printf("\nWelcome to Beach Burger Shack!\n");
    printf("Choose from the following menu to order. Press enter when done.\n\n");

    for (int i = 0; i < NUM_ITEMS; i++)
    {
        printf("%s: $%.2f\n", menu[i].item, menu[i].price);
    }
    printf("\n");

    for (int l = 0; l < NUM_ITEMS; l++)
    {
        for (int m = 0; m < strlen(menu[l].item); m++)
        {
            menu[l].item[m] = tolower(menu[l].item[m]);
        }
    }
    // New learning:
    // The above for-loop is a bad idea.
    // You cannot modify a string literal or even the copy of teh string literal. That is you entered a string within the code
    itself rather than getting it from the user.
        // That string is known as string literal. String literals are usually stored in read-only memory (sometimes called "text
        // segment" or "data segment") of the program. When you define a string literal in your code, the compiler stores that
        // string
        in
        // a fixed location in memory, and the program treats it as read-only data.

        float total = 0;
    while (true)
    {
        string item = get_string("Enter a food item: ");
        if (strlen(item) == 0)
        {
            printf("\n");
            break;
        }

        total += get_cost(item);
    }

    printf("Your total cost is: $%.2f\n", total);
}

// Add at least the first four items to the menu array
void add_items(void)
{
    // Add the first four items to the menu array
    menu[0].item = "Burger";
    menu[0].price = 9.5;

    menu[1].item = "Vegan Burger";
    menu[1].price = 11;

    menu[2].item = "Hot Dog";
    menu[2].price = 5;

    menu[3].item = "Cheese Dog";
    menu[3].price = 7;

    menu[4].item = "Fries";
    menu[4].price = 5;

    menu[5].item = "Cheese Fries";
    menu[5].price = 6;

    menu[6].item = "Cold Pressed Juice";
    menu[6].price = 7;

    menu[7].item = "Cold Brew";
    menu[7].price = 3;

    menu[8].item = "Water";
    menu[8].price = 2;

    menu[9].item = "Soda";
    menu[9].price = 2;
}

// Search through the menu array to find an item's cost
float get_cost(string item)
{
    for (int i = 0; i < strlen(item); i++)
    {
        item[i] = tolower(item[i]);
    }

    for (int k = 0; k < NUM_ITEMS; k++)
    {
        if (strcmp(item, menu[k].item) == 0)
        {
            return menu[k].price;
        }
    }
    return 0; // Return 0 if the item is not found in the menu array
}

// New code by modifying the forloop

#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <strings.h>

// Number of menu items
#define NUM_ITEMS 10

// Menu items have item name and price
typedef struct
{
    string item;
    float price;
} menu_item;

// Array of menu items
menu_item menu[NUM_ITEMS];

// Add items to the menu array
void add_items(void);

// Calculate the total cost
float get_cost(string item);

int main(void)
{
    add_items();

    printf("\nWelcome to Beach Burger Shack!\n");
    printf("Choose from the following menu to order. Press enter when done.\n\n");

    for (int i = 0; i < NUM_ITEMS; i++)
    {
        printf("%s: $%.2f\n", menu[i].item, menu[i].price);
    }
    printf("\n");

    float total = 0;
    while (true)
    {
        string item = get_string("Enter a food item: ");
        if (strlen(item) == 0)
        {
            printf("\n");
            break;
        }

        total += get_cost(item);
    }

    printf("Your total cost is: $%.2f\n", total);
}

// Add at least the first four items to the menu array
void add_items(void)
{
    // Add the first four items to the menu array
    menu[0].item = "Burger";
    menu[0].price = 9.5;

    menu[1].item = "Vegan Burger";
    menu[1].price = 11;

    menu[2].item = "Hot Dog";
    menu[2].price = 5;

    menu[3].item = "Cheese Dog";
    menu[3].price = 7;

    menu[4].item = "Fries";
    menu[4].price = 5;

    menu[5].item = "Cheese Fries";
    menu[5].price = 6;

    menu[6].item = "Cold Pressed Juice";
    menu[6].price = 7;

    menu[7].item = "Cold Brew";
    menu[7].price = 3;

    menu[8].item = "Water";
    menu[8].price = 2;

    menu[9].item = "Soda";
    menu[9].price = 2;
}

// Search through the menu array to find an item's cost
float get_cost(string item)
{
    for (int i = 0; i < strlen(item); i++)
    {
        item[i] = tolower(item[i]);
    }

    char lowercase_menu_items[NUM_ITEMS][50]; // Array of character arrays to store lowercase menu items

    for (int z = 0; z < NUM_ITEMS; z++)
    {
        // Copy the menu item into lowercase_menu_items[z]
        strcpy(lowercase_menu_items[z], menu[z].item);

        // Convert the copied menu item to lowercase
        for (int m = 0; m < strlen(lowercase_menu_items[z]); m++)
        {
            lowercase_menu_items[z][m] = tolower(lowercase_menu_items[z][m]);
        }
        // Now you have the lowercase version of menu[z].item in lowercase_menu_items[z]
    }

    // You can use the above forloop (z) in the main for better efficiency.But we are not using it because we need to pass
    // additional argument (lowercase_menu_items) to this function. Since we are not allowed to alter the main code, we are using
    // this for-loop here itself. This is ineffecient because we are coverting the same characters again and again beofre comapring
    // each time the function is called.

    for (int k = 0; k < NUM_ITEMS; k++)
    {
        if (strcmp(item, lowercase_menu_items[k]) == 0)
        {
            return menu[k].price;
        }
    }
    return 0; // Return 0 if the item is not found in the menu array
}
