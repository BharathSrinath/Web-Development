package basics;

import java.util.Arrays;
import java.util.Scanner;

public class Array_first_non_repeating_element {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size = input.nextInt();
		
		int[] array = new int[size];
		System.out.print("Enter the elements of the array: ");
		for (int i = 0; i < size; i++) {
			array[i] = input.nextInt();
		}
		
		input.close();
		
		System.out.print("\nEntered array is: ");
		for (int i = 0; i < size; i++) {
			System.out.print(" "+array[i]);
		}
		
		int count, first_no_repeat_value = 0;
		for (int i = 0; i < size; i++) {
			count = 0;
			for (int j = 0; j < size; j++) {
				if (array[i] == array[j] && i != j) {
					count++;
					break;
				}
			}
			if (count == 0) {
				first_no_repeat_value = array[i];
				System.out.print("\nFirst non-repeating element is: "+
			first_no_repeat_value);
				return;
			}
		}
		
		Arrays.sort(array);
//		You cannot sort the array as it will change the values with
//		respect to their indexes. Just did it to check hashing the array
//		will work or not. You have to find the largest element in the array
//		using logic which will not alter the array.
		int largest = array[array.length - 1];
		int[] hashArray = new int[largest+1];
		for (int i = 0; i < largest; i++) {
			hashArray[array[i]]++; 
		}
		for (int i = 0; i < largest; i++) {
			if (hashArray[i] == 1) {
				System.out.print("\nFirst non-repeating element is: "+ i);
				return; 
			}
		}
		
	}

}
