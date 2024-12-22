package zoho;
class Solution11 {
    public int[] zoho(int[] nums1, int[] nums2) {
        int[] ans = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            int temp = -1;
            for (int j = nums2.length - 1; j >= 0; j--) {
                if (nums2[j] > nums1[i]) {
                    temp = nums2[j];
                }
                if (nums2[j] == nums1[i]) break;
            }
            ans[i] = temp;
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution11 solution11 = new Solution11();
        int[] nums1 = {2, 4};
        int[] nums2 = {1, 2, 3, 4};
        int[] result = solution11.zoho(nums1, nums2);
        for (int i : result) {
            System.out.print(i + " ");
        }
    }
}
