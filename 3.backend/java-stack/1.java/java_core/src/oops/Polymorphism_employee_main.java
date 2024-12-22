package oops;

import java.util.Scanner;

public class Polymorphism_employee_main {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);

		Polymorphism_employee_marketting marketing = new Polymorphism_employee_marketting(input);
		marketing.inputDetails();
		marketing.displayDetails();

		input.close();

	}

}

// New learning:
// Passing scanner input so that we can open and close scanner
// within main itself that prevents leakage
