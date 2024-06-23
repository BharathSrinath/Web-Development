package oops;

import java.util.Scanner;

public class Banking {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		Banking_methods transaction = new Banking_methods();
		
		System.out.print("Enter + to add to balance or Enter - to withdraw from balance: ");
		char operation = input.next().charAt(0);
		if(operation == '+') {
			System.out.print("Enter the balance to be added: ");
			int add_balance = input.nextInt();
			int new_balance = transaction.deposit(add_balance);
			System.out.print("Rs. "+add_balance+" added successfully. Your new balance is "+new_balance+ ".");
		} else if (operation == '-') {
			System.out.print("Enter the balance to be withdrawed: ");
			int withdraw_balance = input.nextInt();
			int new_balance = transaction.withdraw(withdraw_balance);
			System.out.print("Rs. "+withdraw_balance+" withdrawed successfully. Your new balance is "+new_balance+ ".");
		}
		
		input.close();

	}

}
