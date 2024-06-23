package basics;

import java.util.Scanner;

public class Array_Sort_in_Ascending {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size = input.nextInt();
		
		int[] array = new int[size];
		System.out.println("Enter the elements of the array: ");
		for (int i = 0; i < size; i++) {
			array[i] = input.nextInt();
		}
		
		input.close();
		
		System.out.print("Entered array is: ");
		for (int i = 0; i < size; i++) {
			System.out.print(" "+array[i]);
		}
		
		System.out.print("\nSorted array is: ");
		int temp = 0;
		for (int i = 0; i < size; i++) {
			for (int j = i + 1; j < size; j++) {
				if (array[i] > array[j]) {
					temp = array[i];
					array[i] = array[j];
					array[j] = temp;
				}
			} 
			System.out.print(" "+array[i]);
		}

	}

}
