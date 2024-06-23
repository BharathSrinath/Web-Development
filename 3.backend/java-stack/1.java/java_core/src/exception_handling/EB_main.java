package exception_handling;

import java.util.InputMismatchException;
import java.util.Scanner;

public class EB_main {
		
	    public static void main(String[] args) {
	    	
	    	Scanner input = new Scanner(System.in);

	        System.out.print("Enter number of units consumed: ");

	        try {
	        	int unitsConsumed = input.nextInt();
	        	double total = EB_calculator.calculateCharges(unitsConsumed);
	        	System.out.println("Total Charges: Rs. " + total);
	        }
	        catch(InvalidUnitException e) {
	        	e.printStackTrace();
	        }
	        catch(InputMismatchException e) {
	        	e.printStackTrace();
	        }
	        finally {
	        	input.close();
	        }
	    }

}
