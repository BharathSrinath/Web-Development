package zoho;

import java.util.Arrays;

public class Solution7 {
    public boolean zoho(int[] arr) {
        Arrays.sort(arr);
        for (int i = 0; i < arr.length; i++) {
            int target = 2 * arr[i];
            int lo = 0, hi = arr.length - 1;
            while (lo < hi) {
                int mid = lo + (hi - lo) / 2;
                if (arr[mid] == target && mid != i) return true;
                if (arr[mid] < target) lo = mid + 1;
                else hi = mid - 1;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Solution7 solution7 = new Solution7();
        int[] arr = {1, 3, 5, 7};
        System.out.println("Two-sum variant result: " + solution7.zoho(arr));
        
    }
}

