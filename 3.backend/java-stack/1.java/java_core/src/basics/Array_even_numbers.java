package basics;

import java.util.Scanner;

public class Array_even_numbers {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size= input.nextInt();
		
		int[] n = new int[size];
		System.out.println("Enter the elements of the array:");
		
		int sum = 0;
		for (int i = 0; i < size; i++) {
            n[i] = input.nextInt();
            if (n[i]%2 == 0) {
            	sum += n[i];
            }
        }
		input.close(); 
		
		System.out.println("Sum of the even numbers: "+sum);
	}

}
