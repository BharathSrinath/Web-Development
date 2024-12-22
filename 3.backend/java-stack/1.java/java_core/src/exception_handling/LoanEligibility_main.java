package exception_handling;

import java.util.Scanner;

public class LoanEligibility_main {

    public static void main(String[] args) {
    	
    	Scanner input = new Scanner(System.in);
 
    	System.out.print("Enter the city: ");
    	String location = input.next();
    	System.out.print("Enter your age: ");
    	int age = input.nextInt();
        
    	input.close();
    	LoanEligibility_check check = new 
    			LoanEligibility_check();
    	
    	try {	
            check.checkEligibility(location, age);
        } catch (InvalidLocationException e) {
            System.out.println("Loan eligibility check failed: "
        + e.getMessage());
        } catch (InvalidAgeException e) {
        	System.out.println("Loan eligibility check failed: " 
        + e.getMessage());
        }

	}

}
