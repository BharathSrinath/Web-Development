package basics;

public class Array_largest_number {

	public static void main(String[] args) {
		
		int[] a = {7,9,4,2,1};
		int length = a.length;
		int largest = Integer.MIN_VALUE;
		
		for (int i = 0; i < length; i++) {
			if (a[i] > largest) {
				largest = a[i];
			}
		}
		
		System.out.println("Largest number in array a: "+largest);

	}

}
