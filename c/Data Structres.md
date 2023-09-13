Data structures essentially are forms of organization in memory.

# Queues:
Works based on FIFO (First In First Out)
    enqueued: An item being added to the queue (always at the end)
    dequeued: An item being removed from the queue (always from the beginning)
# Stacks:
Works based on the principle of LIFO (Last in First Out)
    push: An item being added to the stack (always at the top)
    pop: An item being removed from the stack (always from the top)
Code to represent stack:
    const int CAPACITY = 50;
        typedef struct
        {
            person people[CAPACITY];
            int size;
        }
        stack;
Here CAPACITY is how high the stack could be. The integer size is how full the stack actually is, regardless of how much it could hold.
Limitation: Since the capacity of the array is always predetermined in this code, the stack may always be oversized.