// Implements a phone book without structs

#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // Arrays of strings
    string names[] = {"Carter", "David"};
    string numbers[] = {"+1-617-495-1000", "+1-949-468-2750"};

    // Search for name
    string name = get_string("Name: ");
    for (int i = 0; i < 2; i++)
    {
        if (strcmp(names[i], name) == 0)
        {
            printf("Found %s\n", numbers[i]);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

// // Implements a phone book with structs

#include <cs50.h>
#include <stdio.h>
#include <string.h>

// struct is a way to create a new data type in C. It allows you to define a custom data structure that can hold multiple
// pieces (differerent data types together) of related information.
// typedef is used to create an alias or a new name for existing data types.
    // Below struct has been renamed as person

typedef struct
{
    string name;
    string number;
} person;

// Person is the name given to the customised data type. (Simply put, from now on 'person' is a data type)

int main(void)
{
    person people[2];
    // People is the name given to the customised data type
    people[0].name = "Carter";
    // This is the new syntax to store the name and number
    people[0].number = "+1-617-495-1000";

    people[1].name = "David";
    people[1].number = "+1-949-468-2750";

    // Search for name
    string name = get_string("Name: ");
    for (int i = 0; i < 2; i++)
    {
        if (strcmp(people[i].name, name) == 0)
        {
            printf("Found %s\n", people[i].number);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

// Create your own get_candidate function that prompts the user to input attributes for a candidate. Your function should return
a
// candidate.

#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string name;
    int votes;
} candidate;

candidate get_candidate(string prompt);

int main(void)
{
    candidate president = get_candidate("Enter a candidate ");
    printf("%s\n", president.name);
    printf("%i\n", president.votes);
}

candidate get_candidate(string prompt)
// Here candidate is a datatype that encopasses both string and int. get_candidate is the name of the function.
{
    printf("%s\n", prompt);

    candidate c;
    // This step is not necessary. But simplifies your typing
    c.name = get_string("Enter the name: ");
    c.votes = get_int("Total votes: ");
    return c;
}

// Same program usig arrays

#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string name;
    int votes;
} candidate;

candidate get_candidate(string prompt, int candidate_number);

int main(void)
{
    candidate president[3];
    for (int i = 0; i < 3; i++)
    {
        president[i] = get_candidate("Enter the details of the candidate", i+1);
    }
     for (int j = 0; j < 3; j++)
    {
        printf("Details of the candidate %i\n",j+1);
        printf("Name: %s\n", president[j].name);
        printf("Votes: %i\n", president[j].votes);
    }
}

candidate get_candidate(string prompt, int candidate_number)
// Here candidate is a datatype that encopasses both string and int. get_candidate is the name of the function.
{
    printf("%s %i\n", prompt, candidate_number);

    candidate c;
    // This step is not necessary. But simplifies your typing
    c.name = get_string("Enter the name: ");
    c.votes = get_int("Total votes: ");
    return c;
}

// Changing the nane of typedef
// 'typedef oldname newname'

// Array of strcuture without cs50

#include <stdio.h>

typedef struct
{
    char name [20];
    int roll_no;
    float marks;
}student;

int main ()
{
    int n;
    printf ("Ener the number of students: ");
    scanf ("%d", &n);
    student s [n];
    printf ("Enter the details of the students in the format of name, roll no and marks\n");
    for (int i = 0; i < n; i ++)
    {
        scanf ("%s %d %f", s[i].name, &s[i].roll_no, &s[i].marks);
        // Note that you cannot use & when you are reading a string. Because by default they are string pass their address. When you use a &, then yiuy are making it a pointer to something else
    }
    printf ("Entered details are as follows\n");
    for (int i = 0; i < n; i ++)
    {
        printf ("\nstudent %d: \n", i+1);
        printf ("Name: %s\nRoll Number: %d\nMarks: %.2f", s[i].name, s[i].roll_no, s[i].marks);
    }
    printf ("\n");
}

// Pointer to Structures

#include <stdio.h>

typedef struct
{
    char name [20];
    int roll_no;
    float marks;
}student;

int main ()
{
    student s = {"Bharath", 123, 97.52};
    // The reason you can do int a; a = 5; but not student s; s = {"Bharath", 123, 97.52}; directly outside of a function is due to the rules of C language regarding variable initialization.
    // In C, you can declare and initialize variables of basic data types like int, float, etc., at the global scope because these variables can have a default initial value, and that's a language feature. For example, in the case of int a;, the integer variable a is automatically initialized to 0 because integers have a default initial value of 0.
    // However, when it comes to more complex data structures like structs, the C language does not provide a default initial value for struct variables. In your student struct, there is no default way for the language to know what the initial values of name, roll_no, and marks should be. Therefore, you need to explicitly initialize struct variables within a function or at the point of declaration to specify their initial values, as you do within the main function in your code
    // Note: In curly braces they have to be in same order as it is defined in the struct.
        // Else, you can use something called as deginated initialisation
            // with in curly braces you will write as .name = "Bharath", .roll_no = 123 and so on (. operator is essential)

    student *p = &s;
    printf ("Name is %s\n", p -> name);
    // When you are trying to access a member of a structure through a pointer, you use the -> (arrow) operator.
    // Here, 'p' holds the address of our custom data type (student), which has been given a variable name 's'.
    // By using 'p->name', you are instructing the program to go to the address stored in 'p', locate the 'name' member within that address, and access the value stored there.
    // The arrow operator simplifies the process of accessing struct members when working with pointers to structs.
    // Above printf can also be written as   printf ("Name is %s\n", (*p).name);
        // But  you cannot use p.name to access a member of a struct through a pointer p because the dot operator (.) is used to access members of a struct when you have an instance of the struct itself, not a pointer to it.
}

// One more program

#include <stdio.h>

typedef struct
{
    char name[20];
    int roll_no;
    float marks;
} student;

int main()
{
    student s;
    student *p = &s;

    printf("Enter student details (Name, Roll Number, Marks): ");
    scanf("%s %d %f", p->name, &p->roll_no, &p->marks);

    printf("Name: %s\n", p->name);
    printf("Roll Number: %d\n", p->roll_no);
    printf("Marks: %.2f\n", p->marks);
}

// Structure Padding
// Structure padding is the process of adding extra bytes of memory between different data types within a structure to align them in a way that is more efficient for memory access or processor requirements.
// The primary goal of structure padding is to ensure that each data type in the structure starts at a memory address that is a multiple of its size, which can improve memory access speed and processor efficiency.
// For example, let's consider a structure that contains a character (char) followed by an integer (int). In many architectures, an int typically requires 4 bytes, while a char requires only 1 byte. Without any padding, the char might end up at a memory address that is not a multiple of 4, which could lead to slower memory access or even processor errors on some systems.
// To align the data in a structured way, compilers will add padding bytes after the char to ensure that the int starts at a memory address that is a multiple of 4. In this case, 3 empty bytes might be added between the char and the int to achieve the desired alignment.

// As a progammer, the order in which use the data types are very crucial.
    // See this order consumer more memory than the next order.
        // char a
        // char c
        // int b
            // This order requires just 8 bytes (2 empty bytes after char c)
        // char a
        // int b
        // char c
            // This order requires 12 bytes

// You can remove the structure padding with something called as structure packing
    // You do them when memory is much more important than efficient Memory Access
// Include this directive
    // #pragma pack (1)
// Look at the below example

#include <stdio.h>
#pragma pack (1)

typedef struct
{
    char a;
    char b;
    int c;
}abc;

int main ()
{
    abc s;
    printf ("%zu", sizeof (s));
    // Use of zu as a format specifier when you are using sizeof operator
}

// With structure padidng the size would have 8.
// Now with oacking directive being included, the size has become 6