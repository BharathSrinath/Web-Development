package zoho;

public class Solution4 {
    public int zoho(int[] A, int target) {
        int low =0, high = A.length-1;
        while(low <= high) {
        	int mid = (low + high)/2;
        	if(A[mid] == target) return mid;
        	else if (A[mid] > target) high = mid-1;
        	else low = mid+1;
        }
        return low;
    }

    public static void main(String[] args) {
        Solution4 solution4 = new Solution4();
        int[] arr = {1,3,5,6};
        int target = 7;
        System.out.println("Is valid mountain array? " + solution4.zoho(arr, target));
    }
}
