package basics;

import java.util.Scanner;

public class Array_sum_of_2matrix {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);

        System.out.print("Number of rows for both matrices: ");
        int rows = input.nextInt();
        System.out.print("Number of columns for both matrices: ");
        int columns = input.nextInt();
        
        int[][] matrix1 = new int[rows][columns];
        int[][] matrix2 = new int[rows][columns];
        int[][] sumMatrix = new int[rows][columns];
        
        System.out.println("Elements of the first matrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                matrix1[i][j] = input.nextInt();
            }
        }
        System.out.println("Elements of the second matrix:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                matrix2[i][j] = input.nextInt();
            }
        }
        
        input.close();
        
        System.out.println("Matrix1:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
            	System.out.print(matrix1[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println("Matrix2:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
            	System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }
      
        System.out.println("The sum of the matrices is:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
            	sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
                System.out.print(sumMatrix[i][j] + " ");
            }
            System.out.println();
        }

	}

}
