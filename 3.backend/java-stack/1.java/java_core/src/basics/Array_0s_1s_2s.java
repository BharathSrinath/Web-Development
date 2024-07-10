package basics;

public class Array_0s_1s_2s {
//	There are two easy solutions. But below is the optimal solution using "Dutch National
//	Flag Algorithm". You will hear this in many problems. So better learn now.
//	Easy solution 1: Just sort normally
//	Easy solution 2: Count the number of 0's, 1's and 2's. Now use 3 for-loops and fill 
//	the values 0's, 1's and 2's respectively with iteration count based on number of 
//	0's, 1's and 2's. Second for-loop initial value - zeroCount and condition - 
//	(zeroCount + oneCount) and Third for-loop initial value - (zeroCount + oneCount) 
//	and condition - (zeroCount + oneCount + twoCount)
	public static void sort012(int[] nums) {
		int low = 0, mid = 0, high = nums.length - 1;

        while (mid <= high) {
            switch (nums[mid]) {
                case 0:
                    // Swap nums[low] and nums[mid], increment both low and mid
                    swap(nums, low, mid);
                    low++;
                    mid++;
                    break;

                case 1:
                    // Increment mid
                    mid++;
                    break;

                case 2:
                    // Swap nums[mid] and nums[high], decrement high
                    swap(nums, mid, high);
                    high--;
                    break;
            }
        }
	}
        
    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }


    public static void main(String[] args) {
        int[] array = {0, 1, 2, 0, 1, 2, 1, 0};
        sort012(array);
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
