package basics;

public class Array_reverse {

	public static void main(String[] args) {
		
		int[] a = {1,4,5,3,2};
		int length = a.length;
		
		System.out.println("Array in normal order:");
		for (int i = 0; i < length; i++) {
			System.out.println(a[i]);
		}
		
		System.out.println("Array in reverse order:");
		for (int i = length - 1; i >= 0; i--) {
			System.out.println(a[i]);
		}

	}

}
