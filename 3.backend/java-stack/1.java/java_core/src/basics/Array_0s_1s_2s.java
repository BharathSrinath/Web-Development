package basics;

public class Array_0s_1s_2s {
	public static void sort012(int[] A) {
	    int zero = 0;
	    int one = 0;
	    int two = A.length - 1;
	    
	    while (one <= two) {
	        if (A[one] == 0) {
	            // Swap A[zero] and A[one]
	            A[one] = A[zero] + A[one] - (A[zero] = A[one]);
	            zero++;
	            one++;
	        } else if (A[one] == 1) {
	            one++;
	        } else if (A[one] == 2) {
	            // Swap A[one] and A[two]
	            A[one] = A[two] + A[one] - (A[two] = A[one]);
	            two--;
	        }
	    }
	}

    public static void main(String[] args) {
        int[] array = {0, 1, 2, 0, 1, 2, 1, 0};
        sort012(array);
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
