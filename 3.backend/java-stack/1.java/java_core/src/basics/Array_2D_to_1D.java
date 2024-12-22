package basics;

import java.util.Scanner;

public class Array_2D_to_1D {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter the number of rows: ");
		int row = input.nextInt();
		System.out.print("Enter the number of cols: ");
		int col = input.nextInt();
		
		System.out.println("Enter the elements of a 2D array:");
		int[][] TwoD_Array = new int[row][col];
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < col; j++) {
				TwoD_Array[i][j] = input.nextInt(); 
			}
		}
		
		input.close();
		
		System.out.println("Entered 2D array is:");
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < col; j++) {
				System.out.print(TwoD_Array[i][j] + " "); 
			}
			System.out.println();
		}
		
		int[] OneD_Array = new int[row*col];
		int index = 0;
		System.out.print("1D array is: ");
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < col; j++) {
				OneD_Array[index] = TwoD_Array[i][j];
				System.out.print(OneD_Array[index] + " "); 
				index++;
			}
		}
		
		
	}

}
