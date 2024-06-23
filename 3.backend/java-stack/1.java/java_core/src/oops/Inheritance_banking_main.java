package oops;

import java.util.Scanner;

public class Inheritance_banking_main {
	
	public static int action = 0, add = 0, sub = 0;

	public static void main(String[] args) {
	
		Scanner input = new Scanner(System.in);
		System.out.print("Enter your balance: ");
		int balance = input.nextInt();
		System.out.print("Choose your account type:");
		System.out.print("\nEnter '1' for Savings account or '2' for current account: ");
		int account = input.nextInt();
		
		if(account == 1) {
			Inheritance_banking_savings savings_object = new Inheritance_banking_savings(balance);
			print_account_details(balance);
			savings_object.simple_interest();
			action = choose_account_type(input);
			
			if(action == 1) {
				System.out.print("\nEnter the amount to be deposited: ");
				add = input.nextInt();
				savings_object.deposit(add);
			} else if(action == 2) {
				System.out.print("\nEnter the amount to be withdrawed: ");
				sub = input.nextInt();
				savings_object.withdraw(sub);
			} else {
				System.out.print("\nInvalid input");
			}
			
		} else if (account == 2) {
			Inheritance_banking_current current_object = new Inheritance_banking_current(balance);
			print_account_details(balance);
			action = choose_account_type(input);
			if(action == 1) {
				System.out.print("Enter the amount to be deposited: ");
				add = input.nextInt();
				current_object.deposit(add);
			} else if(action == 2) {
				System.out.print("Enter the amount to be withdrawed: ");
				sub = input.nextInt();
				current_object.withdraw(sub);
			} else {
				System.out.print("\nInvalid input");
			}
		} else {
			System.out.print("\nInvalid input");
		}
		
		input.close();
	}
	
	public static void print_account_details(int balance) {
		System.out.print("\nYour account details:");
		System.out.print("\nAccount type: Savings");
		System.out.print("\nBalance: "+balance);
	}
	
	public static int choose_account_type(Scanner input) {
		System.out.print("\nPress 1 for deposit or 2 for withdrawl: ");
		action = input.nextInt();
		//	Cannot close the scanner. Error = "java.util.NoSuchElementException"
		//	When we close the Scanner object here, it also closes the 
		// underlying System.in stream which leads to the above exception
		//	So you can ignore the warning and make sure that scanner is closed in the main method.
		//	New update: We have learned to send scanner as a parameter to other methods which require them.
			//	So We open and close the scanner within the main() method itself. It is the best practice.
		return action;
	}

}
// During trial and error, you have declared scanner as static as we are using
//it in multiple methods. But it is not a good practice owing to following reasons
	//1. Potential resource leakage as static is shared among all instances of the 
		//class and exists for the entire lifetime of the program. Closing a static 
		//Scanner in one method might affect its usability in other methods.
	//2.  If multiple threads access the Scanner concurrently, using a static 
		//scanner can lead to potential thread safety issues. Each thread might 
		//interfere with the input stream, causing unexpected behavior.