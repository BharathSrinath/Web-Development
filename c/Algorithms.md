# 1. Notations
Big O notation, Omega notation, and Theta notation are the notations used in computer science to describe the time of algorithms. 
They are used to provide different insights into the performance of an algorithm and how it behaves under different conditions.
When we use "Big O" notation to describe an algorithm's time complexity, we are estimating how the algorithm's execution time grows with the size of the input.
# Big O notation (O): 
    # It represents the upper bound or worst-case time complexity of an algorithm.
    # It tells us the maximum amount of time an algorithm will take to complete its task as the input size grows. 
    # In other words, it provides an upper limit on the running time.
# Omega Notation (Ω):
    # It represents the lower bound or best-case time complexity of an algorithm. 
    # It tells us the minimum amount of time an algorithm will take to complete its task as the input size grows. 
    # In other words, it provides a lower limit on the running time.
# Theta Notation (Θ):
    # It represents the average-case time complexity of an algorithm. 
    # It provides a tight bound on the running time, indicating that the algorithm's performance will be consistently within a certain range as the input size increases. 
    # In other words, it provides both upper and lower limits on the running time, effectively describing the exact growth rate of the algorithm.
Note: While Big O notation is commonly used to describe the complexity of algorithms, Omega and Theta notations are not as frequently used, as they are usually more difficult to determine. 
# Effective Algorithm criteria:
    For any input what is the most numbe of steps my algorithm will ever take?
    Another way to put this => How many steps will my algorithm take for the very worst case input? 
# Noatations for some of the algorithms:
    Linear Search: O(n); Ω(1)
    Binary Search: O(log n); Ω(1)
    Selection Sort: O(n^2); Ω(n^2)
    Bubble Sort: O(n^2); Ω(n)
    Merge Sort, Quick Sort and Heap Sort: O(n log n); Ω(n log n)

# Determing time complexity:

#include <stdio.h>

void exampleLoop(int n) {
    int sum = 0;
    
    // Step 1: Identify Loops
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            sum += i * j;
        }
    }

    // Step 2: Count Operations
    int product = 1;
    for (int i = 1; i <= n; i++) {
        product *= i;
    }

    // Step 3: Express Complexity
    int totalOperations = 0;
    totalOperations += n * n;        // For the nested loops
    totalOperations += n;            // For the second loop

    // Step 4: Simplify Expressions
    // We simplify this by dropping constants, leaving us with O(n^2)
    // Even though we have two loops, we drop the inner loop's contribution because it's smaller

    // Step 5: Determine Dominant Term
    // In this case, the term "n^2" dominates as "n" grows, so it's the highest power of "n."

    // Step 6: Final Complexity
    // Express the overall time complexity using Big O notation
    printf("Overall Time Complexity: O(n^2)\n");

    // Recursive Function Example
    if (n > 0) {
        exampleLoop(n - 1);  // Recursion with reduced input
    }
}

int main() {
    int n = 5;  // Input size

    // Analyzing the time complexity of the 'exampleLoop' function
    exampleLoop(n);

    return 0;
}

Example1:
void nestedLoops(int n) {
    int count = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            count++;
        }
    }
}

Outerloop runs n times
Inner runs 1 time during first iteration and 2 times in the second and so on upto n times in the nth iteration
    So 1+2+3+.....+n is the number of times it runs. i.e., n(n+1)/2
So the time complexity is n^2 after simplification. 
Here we are arriiving to conclusion that inner forloop will run upto n times which is inherently based on outerloop's i value. Hence we are separatley multiplying the value of outerloop's time complexity with inner loop as we did above

Example 2:
void reverse(int[] array)
{
    for (inti = 0; i < n / 2; i++) {
        int other = array.length - i - 1; int temp = array[i];
        array[i] = array[other]; array[other] = temp;
    }
}

This algorithm runs in O ( N) time. The fact that it only goes through half of the array (in terms of iterations) does not impact the big O time.

Example 3:
Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full array. What would the runtime be?
For sorting characters in a string - O (M log M) * N
    M - Size of the biggest string; N - Number of strings
For sorting in an array - O (N log N) * M
    Here each string will be comapred with every other string. Also, here we are not dealing with numbers or single character Hence we should also be comparing characters in words while comparing two strings

Example 4:
for (int x = 2; x * x <= n; x++)
{
    if (n % x == 0) {
        printf("Not a Prime Number");
        return 1;
    }
}
printf("Prime Number");

The for loop will start when x = 2 and end when x*x = n. Or, in other words, it stops when x = √n. Hence this runs in O(√n) time.

Example 4:
int factorial(int n) {
    if (n < 0) {
        return -1;
    } else if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

This is just a straight recursion from n to n -1 to n - 2 down to 1. It will take O (n) time. I am pretty sure you might thought has O (n!). But lets use a basic logic. At each level of recursion, number of recursive calls is directly proportional to 'n'. That is for every call, the n decreases. This is as simple as it gets. You have always think about how many times the loop runs or hoe many times the function calls. These are the key.

Example 5:
int f(int n) {
    if (n <= 1) { return 1; }
    return f(n - 1) + f(n - 1);
}

See these are tricky. Because you havent seen such recursive calls as of now. What happens here picture it like a tree as follows. Both calls happens in parallel. Imagine now you have new copy of the program side by side.

                                        f (4)
                    f(3)                                          f(3)
               f(2)      f(2)                                f (2)     f(2)
             f(1) f(1) f(1) f(1)                           f(1) f(1) f(1) f(1)

Look at the below table

-----------------------------
|Levels| Nodes | Power of 2 | 
-----------------------------
|   0  |   1   |    2^0     |
-----------------------------
|   1  |   2   |    2^1     |
-----------------------------
|   2  |   4   |    2^2     |
-----------------------------
|   3  |   8   |    2^3     |
-----------------------------
|   4  |   16  |    2^4     |
-----------------------------
Therefore, there will be 2^0 + 2^1 + 2^2 + 2^3 + 2^4 + .... + 2^N (which is 2^(N+1) - 1) nodes
Try to remember this pattern. When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O (branches^depth), where branches is the number of times each recursive call branches. In this case, this gives us O (2^N).

Example 6:
The following code computes the Nth Fibonacci number.
int fib(int n) {
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

Even though the second function call has n-2, when the n is too big it is not going make much of a difference with respect to worst case scenario. So just like previous problem, it is also O (2^N)

Example 7:
The following code prints all Fibonacci numbers from O to n.

void allFib(int n) {
    for (int i = 0; i < n; i++) {
        System.out.println(i + ": " + fib(i));
    }
}
    
    int fib(int n) {
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

T=You have already seen two fibonacci related problems. This is slightly tricky. 
Step 1: You are aclling fib (i) and i get incremented. As the i gets incremeted, the exponential order for the fib (int n) also increases. Why? 
    Just picture this in mind. When i is small (which actually take the value of n in fib (int n)), lesse is the recursion happening. Since there are 2 calls in the return statement we say it as exponential. 
If the n value that is being passed to fib() has remained constant then the time complexity would have been n*(2^n). But n actually keeps changing. When allFib passeses 0 to n-1, for every n, the time complexity of fib(n) is 2^n. 
So, when we add all, it should be n*2^n. But we cant do that because, n is not same for every iteration. Hence 2^n is also not same all the time. Hence were are ignoring the changes caused by n and time complexity will be 2^n.  

Example 8:
The following code prints all Fibonacci numbers from Oto n. However, this time, it stores (i.e., caches) previously computed values in an integer array. If it has already been computed, it just returns the cache. 

void allFib(int n) {
    int[] memo = new int[n + 1];
    for (int i = 0; i < n; i++) {
        System.out.println(i + ": " + fib(i, memo));
    }
}

int fib(int n, int[] memo) {
    if (n <= 0) return 0;
    else if (n == 1) {
        return 1;
    }
    else if (memo[n] > 0) {
        return memo[n];
    }
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

Here what you have to understand is storing the previous values in array eliminates the need to calculate again and again. See when n is 3 your node wil be 
                    f(3)                                  
               f(2)      f(2)                                
             f(1) f(1) f(1) f(1) 

Now when n is 4, it will be 
                                        f (4)
                    f(3)                                          f(3)
               f(2)      f(2)                                f (2)     f(2)
             f(1) f(1) f(1) f(1)                           f(1) f(1) f(1) f(1)

Now when is 4 and having previous access to when n is 3 being stored in memo array, our load is reduced by log n which is actually is opposite of 2^n. So increase in in corresponds to linear incease in complexity. Hence, the time complexity is O (n)
I understand that you all these things tricky. But go through every problem and every example. You will eventually get it. Keep your heads high. 

# 2. Algorithms:
# (a) Linear Search: 
Its pseudocode is as follows
    # If the first element is the target element, them stop
    # Otherwise, move to the next element
# (b) Binary Search:
Its pseudocode is as follows
    # Repeat until the sub-array is of size 0
        # Calculate the middle point of the current sub array
        # If the target is at the middle, stop
        # Otherwise, if the target < middle, your new end point will be just to the left of the current middle point. Calculate new middle point and repeast the process
        # If the target > middle, your new start point will be just to the right of the current middle point. Calculate new middle point and repeast the process
# (c) Bubble Sort:
    # It compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.
    # Its pseudocode is as follows
        # Set swap counter  = non-zero value
        # Repeat until the swap counter is 0
            # Reset swap counter counter to 0
            # Look at each adjacent pair
                # It two adjacent elements are not in order, swap them and add one to the swap counter
        # Ex: Consider the list [5, 2, 9, 1, 5]
            Step1: 5 and 2 will be compared. 2 is less. Hence new arrangement is [2, 5, 9, 1, 5]; counter = 1
            Step2: 5 and 9 will be comapred. No change, hence same arrangement [2, 5, 9, 1, 5]; counter = 2
            Step3: 9 and 1 will be compared. 1 is less. Hence new arrangement is [2, 5, 1, 9, 5]; counter = 3
            Step4: 9 and 5 will be compared. 5 is less. Hence new arrangement is [2, 5, 1, 5, 9]; counter = 4
            Step5: counter = 0 (reset)
            Now same stepss will be repeated.
# (d) Selection Sort: 
    # It finds the smallest element and swaps them with first element of the unsorted list
    # Its pseudocode is as follows
        # Find the smallest value in the unsorted part
        # Swap the samllest found value with first element of the unsorted part 
    # Ex: Consider the list [5, 2, 1, 3, 6, 4]
        1st step: We found that 1 is the smallest value by comparing all elemnents one by one. New arrangement is [1, 2, 5, 3, 6, 4]
        2nd step: Swap 1 and 5. Now 1 is sorted. From next step we should focus only om 2, 5, 3, 6, 4
        Reapeat the process 
# (3) Merge Sort:
    # It breaks the entire list into smaller and samller parts by dividing each by 2 until further it cant be divded.
        Fo an example if the list is 6. It will be divided into 3 and 3 will be divded into 1 and 2 (You should have atleast 2 elements for this sort. But when you have just 1, you dont need to sort. Because there is nothing to sort.) 
    # It comapres the 2 and and sorts them. 
    # Ex: [5, 2, 1, 3, 6, 4]
        Step1: It is broken down into [5, 2, 1 | 3, 6 , 4] and the further to [5 | 2, 1 | 3 | 6 , 4]
            5,2,1 are left half and 3,6,4 are the right half
            Similarly we will first consider the left half alone. Here 5 will be new left half and 2,1 is the new right half
        Step2: First element of the left half will be comapred with second element. But here we dont have the second elemnet. Hence 5 is sorted.
        Step3: First element of the right half will be comapred with second element. New arrangement will be [5 | 1, 2 | 3 | 6 , 4]
        Step4: Now first element of the left half will be compared with first element of right half. (5 and 1) 
            Now 1 will become the first element
        Step5: Now first element of the left half will be compared with second element of right half. (5 and 2)
            Now 2 will become the second element and 5 will be the 3rd element. New arrangement is [1, 2, 5 | 3 | 6, 4] 
        Repeat the same for the original right half and do it for the whole list. 
    # Its pseudocode is as follows
        # Sort the left half of the array (assuming n > 1)
        # Sort the right half of the array (assuming n > 1)
        # Merge the two halves together