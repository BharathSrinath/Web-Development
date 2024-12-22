package basics;

import java.util.Scanner;

public class Array_move_zero_to_the_end {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size= input.nextInt();
		
		int[] n = new int[size];
		System.out.println("Enter the elements of the array:");
		
		for (int i = 0; i < size; i++) {
            n[i] = input.nextInt();
        }
		input.close(); 
		
		System.out.print("Entered array:");
		
		for (int i = 0; i < size; i++) {
			System.out.print(" " + n[i]);
		}
		
		int m = 0;
		for (int i = 0; i < size; i++) {
			if (n[i] != 0) {
				n[m] = n[i];
				m++;
            }
        }
		
		for (int i = m; i < size; i++) {
			n[i] = 0;
			//	With respect to 0, you dont need to assign using a for-loop like this.
			//	Because by default, 0 will be stored. But for any other number, you might need this
		}
		
		System.out.print("\nArray after moving the zero/zeroes to the end: ");
		
		for (int i = 0; i < size; i++) {
			System.out.print(" " + n[i]);
		}

	}

}
