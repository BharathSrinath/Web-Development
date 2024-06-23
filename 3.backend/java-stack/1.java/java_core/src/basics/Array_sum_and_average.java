package basics;

import java.util.Scanner;

public class Array_sum_and_average {

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
		
		int sum = 0;
		for (int i = 0; i < size; i++) {
			sum += array[i];
		}
		
		float average = (float) sum/size;
		
		System.out.println("Sum of the numbers: "+sum);		
		System.out.println("Average of the numbers: "+average);		

	}

}
