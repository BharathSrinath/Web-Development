package basics;

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
			for (int j = i + 1; j < size; j++) {
				if (array[i] == array[j]) {
					count++;
				}
			}
			first_no_repeat_value = array[i];
			if (count == 0) {
				System.out.print("\nFirst non-repeating element is: "+first_no_repeat_value);
				return;
			}
			
		}

	}

}
