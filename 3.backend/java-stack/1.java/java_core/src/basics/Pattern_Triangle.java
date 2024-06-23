package basics;

import java.util.Scanner;

public class Pattern_Triangle {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number of rows for the pattern: ");
		int row = input.nextInt();
		
		input.close();
		
		System.out.println("Right angled triangle");
		for (int i = 1; i <= row; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print("*");
			}
		System.out.println();
		}
		System.out.println("Inverted Right angled triangle");
		for (int i = 1; i <= row; i++) {
			for (int j = row; j >= i; j--) {
				System.out.print("*");
			}
		System.out.println();
		}
		
		System.out.println("Right angled triangle + Inverted Right angled triangle");
		for (int i = 1; i <= row; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print("*");
			}
		System.out.println();
		}
		for (int i = 1; i <= row-1; i++) {
			for (int j = row-1; j >= i; j--) {
				System.out.print("*");
			}
		System.out.println();
		}
		
		System.out.println("Mirror of Right angled triangle");
		for (int i = 1; i <= row; i++) {
			for (int j = 1; j <= row; j++) {
				if (j > row - i) {
					System.out.print("*");
				} else {
					System.out.print(" ");
				}
				
			}
		System.out.println();
		}
		
		System.out.println("Mirror of Inverted Right angled triangle");
		for (int i = 1; i <= row; i++) {
			for (int j = row; j >= 1; j--) {
				if (j <= row - i + 1) {
					System.out.print("*");
				} else {
					System.out.print(" ");
				}
				
			}
		System.out.println();
		}
		
		System.out.println("Mirror of Right angled triangle + Mirror of Inverted Right angled triangle");
		for (int i = 1; i <= row; i++) {
			for (int j = 1; j <= row; j++) {
				if (j > row - i) {
					System.out.print("*");
				} else {
					System.out.print(" ");
				}
				
			}
		System.out.println();
		}
		for (int i = 2; i <= row; i++) {
			for (int j = row; j >= 1; j--) {
				if (j <= row - i + 1) {
					System.out.print("*");
				} else {
					System.out.print(" ");
				}
				
			}
		System.out.println();
		}

	}

}
