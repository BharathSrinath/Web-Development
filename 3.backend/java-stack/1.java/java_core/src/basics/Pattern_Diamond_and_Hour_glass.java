package basics;

import java.util.Scanner;

public class Pattern_Diamond_and_Hour_glass {
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a size (odd value): ");
		int size = input.nextInt();
		
		input.close();
		
//		int middle = (size/2) + 1;
		if(size%2 == 1) {
			System.out.println("Triangle:");
			for (int i = 1; i <= size; i++) {
	            for (int j = 1; j <= size- i; j++) {
	                System.out.print(" ");
	            }
	            for (int k = 1; k <= (i * 2) - 1; k++) {
	                System.out.print("*");
	            }
	            System.out.println();
	        }
			
			System.out.println("Inverted Triangle:");
			for (int i = 1; i <= size; i++) {
	            for (int j = 1; j <= i - 1; j++) {
	                System.out.print(" ");
	            }
	            for (int k = 1; k <= (size - i) * 2 + 1; k++) {
	                System.out.print("*");
	            }
	            System.out.println();
	        }
			
			System.out.println("Diamond Pattern: Triangle + Inverted Triangle:");
			for (int i = 1; i <= size; i++) {
	            for (int j = 1; j <= size- i; j++) {
	                System.out.print(" ");
	            }
	            for (int k = 1; k <= (i * 2) - 1; k++) {
	                System.out.print("*");
	            }
	            System.out.println();
	        }
			for (int i = 1; i <= size; i++) {
				//	To remove the middle part (which is repeated twice), we are updating j's value and k's condition
	            for (int j = 0; j <= i - 1; j++) {
	                System.out.print(" ");
	            }
	            for (int k = 1; k <= (size - 1 - i) * 2 + 1; k++) {
	                System.out.print("*");
	            }
	            System.out.println();
	        }
			
			System.out.println("Hour Glass Pattern: Triangle + Inverted Triangle:");
			for (int i = 1; i <= size - 1; i++) {
//				To remove the middle part (which is repeated twice), we are updating i's condition
	            for (int j = 1; j <= i - 1; j++) {
	                System.out.print(" ");
	            }
	            for (int k = 1; k <= (size - i) * 2 + 1; k++) {
	                System.out.print("*");
	            }
	            System.out.println();
	        }
			for (int i = 1; i <= size; i++) {
	            for (int j = 1; j <= size- i; j++) {
	                System.out.print(" ");
	            }
	            for (int k = 1; k <= (i * 2) - 1; k++) {
	                System.out.print("*");
	            }
	            System.out.println();
	        }
			
		} else {
			System.out.println("Kindly enter a odd Value!");
		}

	}

}

// My initial logic to print the combination of normal triangle and inverted triangle
//for (int i = 1; i <= size; i++) {
//	for (int j = 1; j <= size; j++) {
//		if(((i >= 1 && i < middle) && (j >= middle - (i-1) && j <= middle + (i-1))) || 
//			(i == middle) || ((i > middle && i <= size) && (j >= middle + (i-size) && j <= middle - (i-size)))) {
//			System.out.print("*");
//		} else {
//			System.out.print(" ");
//		}	
//	}
//System.out.println();