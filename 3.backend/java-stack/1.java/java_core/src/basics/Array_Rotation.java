package basics;

import java.util.Scanner;

public class Array_Rotation {

	public static void main(String[] args) {
		
		Scanner input = new Scanner (System.in);
		System.out.print("Enter the size of the array: ");
		int size = input.nextInt();
		
		int[] a = new int[size];
		System.out.print("Enter the elements of the array: ");
		for (int i = 0; i < size; i++) {
			a[i] = input.nextInt();
		}
		
		input.close();
		
		System.out.print("\nEntered array is: ");
		for (int i = 0; i < size; i++) {
			System.out.print(" "+a[i]);
		}
		
		int[] b = new int[size];
		int pos = 2, k = 0; 
		// Here position(pos)/index will be given. That is the reference point 
		// from which we have to rotate the array.
		// In question if they have given the position, but asked you to rotate the index, then pos-1
		// position: 1,2,3,4,5       index: 0,1,2,3,4	
		for (int i = pos; i < size; i++) {
			b[k++] = a[i];
		}
		//	Above for loop will move the elements starting from pos.
		//	Below for loop will move the rest of the elements to the end.
		for (int i = 0; i < pos; i++) {
			b[k++] = a[i];
		}
		
		System.out.print("\nAfter rotation: ");
		for (int i = 0; i < size; i++) {
			System.out.print(" "+b[i]);
		}

	}

}
