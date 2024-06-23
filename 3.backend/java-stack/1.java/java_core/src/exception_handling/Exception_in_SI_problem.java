package exception_handling;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception_in_SI_problem {

	public static void main(String[] args) {

		Scanner input = new Scanner (System.in);
		double SI = 0;
		try {
			System.out.print("Enter the principal amount: ");
			double P = input.nextDouble();
			System.out.print("Enter the number of years: ");
			int N = input.nextInt();
			System.out.print("Enter the rate of interest: ");
			double R = input.nextDouble();
			
			if (P <= 0 || N <= 0 || R <= 0) {
                throw new NegativeNumberException("Inputs cannot be Zero/Negative");
            }
			
			SI = (P*N*R)/100;
			System.out.println("Simple Interest: "+SI);
		}
		catch (InputMismatchException e) {
			System.out.println("Kindly enter whole numbers only!");
			e.printStackTrace();
		}
		catch (NegativeNumberException e) {
			System.out.println(e.getMessage());
		}
		finally {
			input.close();
		}
	}

}
