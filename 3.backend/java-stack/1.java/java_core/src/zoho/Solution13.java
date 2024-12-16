package zoho;

class Solution13 {
    public int[] zoho(int[] nums) {
        int[] ans = new int[2 * nums.length];
        for (int i = 0; i < nums.length; i++) {
            ans[i] = ans[i + nums.length] = nums[i];
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution13 solution13 = new Solution13();
        int[] nums = {1, 2, 1};
        int[] result = solution13.zoho(nums);
        for (int i : result) {
            System.out.print(i + " ");
        }
    }
}

