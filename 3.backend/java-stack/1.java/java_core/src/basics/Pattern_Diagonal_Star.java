package basics;

import java.util.Scanner;

public class Pattern_Diagonal_Star {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = input.nextInt();

        input.close();
        
        if (number < 5){
            System.out.print("Invalid Value");
            return;
        }

        for (int i = 1; i <= number; i++){
            for (int j = 1; j <= number; j++){
            	if (j == 1 || i == 1 || j == number || i == number || j == i || j == number - i + 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        
	}

}
