// #include <stdio.h>

// int main() {
//     int n;
//     printf("Enter the size of the array: ");
//     scanf("%d", &n);

//     int a[n]; // Declare a variable-length array

//     for (int i = 0; i < n; i++) {
//         a[i] = i * i;
//         // This program stores the square of n numbers using variable array length
//     }

//     printf("Array elements:\n");
//     for (int i = 0; i < n; i++) {
//         printf("%d ", a[i]);
//     }

//     return 0;
// }

// This will print the address of the elements

#include <stdio.h>

int main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int a[n]; // Declare a variable-length array

    for (int i = 0; i < n; i++) {
        a[i] = i;
    }

    printf("%d\n", &a);
    // We are using this printf to demonstr ate that &a and &a[0]'s address are one and the same
    printf("Array elements:\n");
    for (int i = 0; i < n; i++) {
        printf("%d\n", &a[i]);
    }

    return 0;
}
