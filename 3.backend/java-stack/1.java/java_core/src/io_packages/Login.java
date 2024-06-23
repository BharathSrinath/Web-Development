package io_packages;

import java.util.Scanner;

public class Login {

	public static void main(String[] args){
		
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter username: ");
		String username = scanner.nextLine();

		System.out.print("Enter password: ");
		String password = scanner.nextLine();

		if (username.equals("accord") && password.equals("java")) {
		    System.out.println("Welcome, " + username + "!");
		} else {
		    System.out.println("Invalid Login Credentials");
		}

		scanner.close();
        
    }

}
