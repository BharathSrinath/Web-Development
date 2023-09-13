# 1. Notations
Big O notation, Omega notation, and Theta notation are the notations used in computer science to describe the time or space complexity of algorithms. 
They are used to provide different insights into the performance of an algorithm and how it behaves under different conditions.
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
    Merge Sort: O(n log n); Ω(n log n)

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
