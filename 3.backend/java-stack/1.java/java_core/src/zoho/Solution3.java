package zoho;

public class Solution3 {
    public boolean zoho(int[] arr) {
    	if(arr.length < 3) return false;
    	int l = 0;
    	int r = arr.length-1;
    	while(l + 1 < arr.length - 1 && arr[l] < arr[l+1]) l++;
    	while(r-1 > 0 && arr[r] < arr[r-1]) r--;
    	return l == r;
    }

    public static void main(String[] args) {
    	Solution3 solution3 = new Solution3();
        int[] arr = {0, 3, 2, 1};
        System.out.println("Is valid mountain array? " + solution3.zoho(arr));
    }
}

