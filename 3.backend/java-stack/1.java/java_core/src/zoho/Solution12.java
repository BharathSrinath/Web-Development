package zoho;

class Solution12 {
    public int zoho(int[] nums) {
        int ans = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) ans++;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution12 solution12 = new Solution12();
        int[] nums = {1, 2, 3, 1, 1, 3};
        System.out.println(solution12.zoho(nums)); // Output
    }
}

