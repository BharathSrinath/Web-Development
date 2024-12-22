package zoho;

import java.util.Arrays;

public class Solution2 {
    public int[] zoho(int[] nums) {
        int[] temp = new int[101];
        for (int i = 0; i < nums.length; i++)
            temp[nums[i]] += 1;

        for (int j = 1; j <= 100; j++)
            temp[j] += temp[j - 1];

        for (int k = 0; k < nums.length; k++) {
            int pos = nums[k];
            nums[k] = pos == 0 ? 0 : temp[pos - 1];
        }
        return nums;
    }

    public static void main(String[] args) {
        Solution2 solution2 = new Solution2();
        int[] nums = {6, 5, 4, 8};
        System.out.println("Result: " + Arrays.toString(solution2.zoho(nums)));
    }
}
