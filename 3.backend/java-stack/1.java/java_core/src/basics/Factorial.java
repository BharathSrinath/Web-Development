package basics;

import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.print("Enter the n value: ");
		int n = input.nextInt();
		
		input.close();
		
		int product = 1;
		for (int i = 1; i <= n; i++) {
			product *= i;
		}

		System.out.print("Factorial of "+n+" is: "+product);
	}

}
