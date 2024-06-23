package oops;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		
		System.out.print("Operation to be performed (+ or - or / or *): ");
		char operation = input.next().charAt(0);
		while(operation != '+' && operation != '-' && operation != '/' && operation != '*') {
			System.out.print("Kindly enter + or - or / or *: ");
			operation = input.next().charAt(0);
		}
		
		System.out.print("Enter a: ");
		int a = input.nextInt();
		System.out.print("Enter b: ");
		int b = input.nextInt();
		
		input.close();
		
		Calculator_methods calc = new Calculator_methods();
		int result = 0;
		
		switch(operation) {
			case '+':
				result = calc.sum(a,b);
				System.out.print("Sum of "+a+" and "+b+" is: "+result);
				break;
			case '-':
				result = calc.diff(a,b);
				System.out.print("Difference of "+a+" and "+b+" is: "+result);
				break;
			case '/':
				result = calc.quo(a,b);
				System.out.print("Quotient when "+a+" is divided by "+b+" is: "+result);
				break;
			case '*':
				result = calc.prod(a,b);
				System.out.print("Product of "+a+" and "+b+" is: "+result);
				break;
			default:
				System.out.print("Kindly enter two whole numbers");
		}
		
	}

}
