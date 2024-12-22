package oops;

import java.util.Scanner;

public class Constructor_quo_and_rem {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter number1: ");
		int n1 = input.nextInt();
		System.out.print("Enter number1: ");
		int n2 = input.nextInt();
		
		input.close();
		
		Constructor_quo_and_rem_methods calculator = new 
				Constructor_quo_and_rem_methods(n1, n2);
		int quotient = calculator.quo();
        int remainder = calculator.rem();
        
        System.out.print("Quotient: " + quotient);
        System.out.print("\nRemainder: " + remainder);

	}

}
