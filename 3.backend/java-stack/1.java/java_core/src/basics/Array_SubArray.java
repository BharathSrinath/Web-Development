package basics;

import java.util.Scanner;

public class Array_SubArray {
//	IMPORTANT Note: By definition, sub Arrays cannot have duplicate values. if a = {1,2,3,4,5} and 
//	b = {1,2,1}, b is not a sub array of a. a should have 2 1's for b to be a sub-array of a.

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter the array size of a: ");
		int a_size = input.nextInt();
		
		System.out.print("Enter the array elements of a: ");
		int[] a = new int[a_size];
		for (int i = 0; i < a_size; i++) {
			a[i] = input.nextInt();
		}
		
		
		System.out.print("Enter the array size of b: ");
		int b_size = input.nextInt();
		
		System.out.print("Enter the array elements of b: ");
		int[] b = new int[b_size];
		for (int i = 0; i < b_size; i++) {
			b[i] = input.nextInt();
		}
		
		input.close();
		
		System.out.print("Entered array a is: ");
		for (int i = 0; i < a_size; i++) {
			System.out.print(" "+a[i]);
		}
		
		System.out.print("\nEntered array b is: ");
		for (int i = 0; i < b_size; i++) {
			System.out.print(" "+b[i]);
		}
		
		int count = 0; 
//		int element_exist = 0;
		for (int i = 0; i < b_size; i++) {
			count = 0;
			for (int j = 0; j < a_size; j++) {
				if (b[i] == a[j]) {
					count++;
				}
			} 
//			if (count > 0) {
//				element_exist++;
//			}
		}
		System.out.print((count == b_size) ? "\nb is a sub array of a" : "\nb is NOT a sub array of a");
//		System.out.print((element_exist == b_size) ? "\nb is a sub array of a" : "\nb is NOT a sub array of a");

	}

}
