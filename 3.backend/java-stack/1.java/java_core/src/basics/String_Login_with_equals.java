package basics;

import java.util.Scanner;

public class String_Login_with_equals {

	public static void main(String[] args) {
		
		Scanner input = new Scanner (System.in);
		System.out.print("Enter your username: ");
		String username = input.next();
		
		if (username.equals("bharathsrinath")) {
			
			System.out.print("Enter your password: ");
			String password = input.next();
			
			if(password.equals("AimHigh")) {
				System.out.print("Welcome "+username);
			} else {
				System.out.print("Wrong password");
			}
		} else {
			System.out.print("Username doesn't exist");
		}
		
		input.close();
	}
}
