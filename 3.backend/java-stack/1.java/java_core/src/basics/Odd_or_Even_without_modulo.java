package basics;

import java.util.Scanner;

public class Odd_or_Even_without_modulo {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.print("Enter the n value: ");
		int n = input.nextInt();
		
		input.close();
		
		System.out.print((n/2) * 2 == n ? "Even number" : "Odd number");

	}

}
