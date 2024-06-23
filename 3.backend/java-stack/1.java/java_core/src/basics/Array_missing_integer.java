package basics;

import java.util.Arrays;

public class Array_missing_integer {
	
	public static int findMissingNumber(int[] nums, int n) {
        // Calculate the expected sum of numbers from 1 to n
		int m = nums[1] - nums[0];
        int sum_n = n * m * (n + 1) / 2;
        
        // Calculate the actual sum of numbers in the array
        int actualSum = 0;
        for (int num : nums) {
            actualSum += num;
        }
        
        // The missing number is the difference between the expected sum and the actual sum
        return sum_n - actualSum;
	}
	
	public static void main(String[] args) {

		int[] nums = {3, 6, 12, 15};  // Example input
        int n = nums.length + 1;  // n is the range of numbers from 1 to n
        Arrays.sort(nums);
        int missingNumber = findMissingNumber(nums, n);
        System.out.println("The missing number is: " + missingNumber);

	}
}

