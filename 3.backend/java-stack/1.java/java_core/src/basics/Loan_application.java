package basics;
// Difference between package and libraries
	// package: way to organize different pieces of code. Loan_application is a class that 
		// belongs to a package called basics. We can import this class to other part of the code
		// using "import basics.Loan_application".  
	// libraries: collection of pre-written code or functions that we can use to do certain tasks.
		// java.util is the package and Scanner is inbuilt class.
import java.util.Scanner;

public class Loan_application {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.println("Enter your age: ");
		int age = input.nextInt();
		
		if(age >= 20) {
			
			System.out.print("Enter your Salary: ");
			double salary = input.nextDouble();
			input.close();
			
			if(salary >= 25000) {
				System.out.println("Loan Sanctioned");
			}
			else {
				System.out.println("Loan Rejected");
			}
		}
		else {
			System.out.println("Age criteria hasn't been met");
		}

	}

}
