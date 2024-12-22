package zoho;

import java.util.Arrays;

public class Solution8 {
    public int[] buildArray(int[] nums) {
        int[] ans = new int[nums.length];
        for (int i = 0; i < nums.length; i++)
            ans[i] = nums[nums[i]];
        return ans;
    }

    public static void main(String[] args) {
        Solution8 solution8 = new Solution8();
        int[] nums = {0, 2, 1, 5, 3, 4};
        System.out.println("Resultant array: " + Arrays.toString(solution8.buildArray(nums)));
    }
}

