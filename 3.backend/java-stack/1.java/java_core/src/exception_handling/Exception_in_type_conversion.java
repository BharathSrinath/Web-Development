package exception_handling;

import java.util.Scanner;

public class Exception_in_type_conversion {

	public static void main(String[] args) {

		Scanner input = new Scanner (System.in);
		
		System.out.print("Enter your first string: ");
		String string1 = input.nextLine();
		System.out.print("Enter your second string: ");
		String string2 = input.nextLine();
		
		int first = 0, second = 0;
		try {
			first = Integer.parseInt(string1);
			second = Integer.parseInt(string2);
			System.out.println("Division of entered numbers is: "+(first/second));
		} 
		catch(NumberFormatException e) {
			System.out.println("String conversion unsuccessful");
			e.printStackTrace();
		}
		catch(ArithmeticException e) {
			if(second == 0) {
				System.out.println("Cannot be divided by 0");
			} else {
				System.out.println("Too large a value for the data-type to hold");
			}
			e.printStackTrace();
		}
		
		input.close();

	}

}
