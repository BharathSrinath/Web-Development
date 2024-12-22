package basics;

import java.util.Scanner;

public class Pattern_Floyds_triangle {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number of rows for the pattern: ");
		int row = input.nextInt();
		
		input.close();
		
		int m = 1;
		for (int i = 1; i <= row; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print(" "+m);
				m++;
			}
		System.out.println();
		
		}

	}

}
