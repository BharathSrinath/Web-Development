#include <stdio.h>

int main()
{
    char name [30];
    printf ("Enter your name: ");
    // scanf ("%s", name);
    // Understanding 1: You don not need '&' in the scanf when you are using %s (that is for string). Because the varaible name itself hold the address of the first character. Since it is a string (character arrays), subsequent bytes will have one chacracter. So knowing the address of the first character is enough.
    // Understandig 2: Issue with scanf when used with the %s format specifier is that, it reads a string up to the first whitespace character (including spaces, tabs, and newline characters).  That is scanf stops reading at the first space. If you have 5 words with 4 whitespaces, you should use 4 %s to read all of them.
    // Alterantive is gets. Since it has been deprecated, we will stick to fgets. 
    // Both scanf and gets has overflow issues. Irresecptive of the size of the string specified at the line " char name [30];", both will print the entire string. While scanf will get terminated at the first whitespace, gets will print in its entirety by over-riding other memory which has values which we are not aware of. 
        // But in scanf you can use  "scanf ("%5s", name);" Here maximum 5 characters will be printed including NUL. Still using this not recommended.
    fgets(name, sizeof(name), stdin);
    // Generally used to read from files. So the last element will be a file name which will be the input from where the data will be read. But in our case we are mentioning it has stdin which represents standard input that is our keyboard. That is, it will read the input from the user.
    printf ("Hello, %s", name);
    // similarly you have puts and fputs 
    // gets, puts, fputs and fegts all have onething in common. They add newline automatically at the end. That is the cursor will move to the next line automatically.
    // To remove this line (If you want to), =>  "var_name[strcspn(var_name, "\n")] = '\0';"
    // Note: 
        // printf ("%.5s", name); Its ouput for the entered input "Bharath" will be Bhara
        // printf ("%10.5s", name); Its ouput for the entered input "Bharath" will be _ _ _ _ _ Bhara (Total space will be 10 .5 represents right shifting 5 spaces)
        //  printf ("%s", name[2]); Its ouput for the entered input "Bharath" will be arath.
}