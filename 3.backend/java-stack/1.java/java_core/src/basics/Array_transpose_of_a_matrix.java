package basics;

public class Array_transpose_of_a_matrix {

	public static void main(String[] args) {

		int[][] matrix = {
	            {1, 2, 3},
	            {4, 5, 6},
	            {7, 8, 9}
	        };

        System.out.println("Original Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        int rows = matrix.length;
        int columns = matrix[0].length;
        int[][] transpose = new int[columns][rows];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }

        System.out.println("\nTranspose of the Matrix:");
        for (int i = 0; i < transpose.length; i++) {
            for (int j = 0; j < transpose[i].length; j++) {
                System.out.print(transpose[i][j] + " ");
            }
            System.out.println();
        }
            

	}

}
