package oops;

import java.util.Scanner;

public class Inheritance_banking_savings extends 
Inheritance_banking_main{

	int balance = 0;
	int n = 1;
	int r = 6;
	
	Scanner input = new Scanner(System.in);
	
	public Inheritance_banking_savings (int balance) {
		this.balance = balance;
	}
	
	public void simple_interest() {
		int SI = (balance*n*r)/100;	
		System.out.println("\nInterest for your deposit amount of Rs."
				+balance+" for a period of "+n+" year at the rate of "+r+
				"% would be: Rs. "+SI);
	}
	
	public void deposit(int new_balance) {
		balance += new_balance;
		System.out.println("New Balance after your deposit is: "+balance);
	}
	
	public void withdraw(int new_balance) {		
		balance -= new_balance;
		System.out.println("New Balance after withdrawal is: "+balance);
	}
	
	
}
