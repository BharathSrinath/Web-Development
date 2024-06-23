package basics;

import java.util.Scanner;

public class Pattern_Rectangle {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the length of rectangle: ");
		int length = input.nextInt();
		System.out.print("Enter the breadth of rectangle: ");
		int width = input.nextInt();
		
		input.close();
		
		for (int i = 1; i <= width; i++) {
			for (int j = 1; j <= length; j++) {
				if (i == 1 || i == width || j == 1 || j == length) {
					System.out.print("*");
				} else {
					System.out.print(" ");
				}
			}
			System.out.println();
		}

	}

}
