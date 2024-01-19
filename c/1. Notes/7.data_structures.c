// Implements a list of numbers with an array of dynamic size using realloc

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    // List of size 3
    int *list = malloc(3 * sizeof(int));
    if (list == NULL)
    // malloc will retrun NULL when the computer runs out of memory
    {
        return 1;
    }

    // Initialize list of size 3 with numbers
    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    // Imagine you wanted to store a fourth value 4 in our array? What would be needed is to allocate a new area of memory and move the old array to a new one.
    // Adding a number eslewhere in the memory would break the definition of an array. So we have add next to the last item. But this will be highly ineffecient because every time we add a number, we have to copy the array item by item.
    // We initialize a new pointer variable called 'tmp' and allocate 4 bytes to it through malloc.
    int *tmp = malloc(list, 4 * sizeof(int));
    if (tmp == NULL)
    {
        free(list);
        return 1;
    }
    list = tmp; // We are copying the address (as both are pointer variables) from tmp to list. Now list will also point to the same memory location as tmp.

    // Add number to list
    list[3] = 4;

    // Print list
    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }

    // Free list
    free(list);
    return 0;
}

// Implements a list of numbers with an array of dynamic size using realloc

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    // List of size 3
    int *list = malloc(3 * sizeof(int));
    if (list == NULL)
    {
        return 1;
    }

    // Initialize list of size 3 with numbers
    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    // Resize list to be of size 4
    int *tmp = realloc(list, 4 * sizeof(int));
    // Instead of using malloc again, we are using realloc
    // Aspect	    malloc	                                    realloc
    // Purpose	    Allocate a new block of memory	            Resize an existing block of memory
    // Input	    Size of the memory block to allocate	    Pointer to an existing memory block, New size
    // Output	    Pointer to the start of the allocated       Pointer to the resized memory block (may be changed)
    //              block
    // Memory
    // Contents	    Uninitialized (may contain random data)	    Preserves existing data, new space may be uninitialized
    // Error
    // Handling	    Returns NULL on failure	                    Returns NULL on failure, original pointer intact
    // Usage	    Typically used for initial memory           Used for resizing existing memory
    //              allocation
    // Deallocation	Memory must be manually freed using free	If resizing to a smaller size, excess data is lost.
    //                                                          Memory can still be freed using free afterwards.
    // Internal
    // Process	    Allocates new memory and returns pointer	Allocates new memory, copies data, and returns pointer
    if (tmp == NULL)
    {
        free(list);
        return 1;
    }
    list = tmp;

    // Add number to list
    list[3] = 4;

    // Print list
    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }

    // Free list
    free(list);
    return 0;
}
