package basics;

import java.util.Scanner;

public class Array_read_and_print_matrix {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter the row size: ");
		int row = input.nextInt();
		System.out.print("Enter the col size: ");
		int col = input.nextInt();
		
		int[][] matrix = new int[row][col];
		System.out.println ("Enter the elements: ");
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < col; j++) {
				matrix[i][j] = input.nextInt();
			}
		}
		
		input.close();
		
		System.out.println ("Entered elements are: ");
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < col; j++) {
				System.out.print(matrix[i][j]+" ");
			}
			System.out.println(); 
		}
	}
}
