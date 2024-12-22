package zoho;

public class Solution5 {
    public boolean zoho(int[] arr, int n) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                boolean left = (i == 0) || (arr[i - 1] == 0);
                boolean right = (i == arr.length - 1) || (arr[i + 1] == 0);
                if (left && right) {
                    arr[i] = 1;
                    count++;
                }
            }
        }
        System.out.println("count: "+count);
        System.out.println("n: "+n);
        return count >= n;
    }

    public static void main(String[] args) {
        Solution5 solution5 = new Solution5();
        int[] arr = {1, 0, 0, 0, 1};
        int n = 1;
        System.out.println("Can place flowers? " + solution5.zoho(arr, n));
    }
}

