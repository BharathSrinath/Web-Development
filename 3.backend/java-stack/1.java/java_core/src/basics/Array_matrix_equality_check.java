package basics;

import java.util.Scanner;

public class Array_matrix_equality_check {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
        System.out.print("Number of rows for both matrices: ");
        int rows = input.nextInt();
        System.out.print("Number of columns for both matrices: ");
        int columns = input.nextInt();
        
        int[][] matrix1 = new int[rows][columns];
        int[][] matrix2 = new int[rows][columns];
        
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
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                if (matrix1[i][j] == matrix2[i][j]) {
                    continue;
                } else {
                	System.out.println("Matrices are NOT equal");
                	return;
                }
            }
        }
        System.out.println("Matrices ae equal");
	}

}
