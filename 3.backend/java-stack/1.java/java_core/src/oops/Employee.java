package oops;

import java.util.Scanner;

public class Employee {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter employee Id: ");
		int id = input.nextInt();
		
		input.nextLine();
		
//		Input Buffer: When you use Scanner to read input, Java stores 
//		that input in a temporary storage area called the input buffer.
//
//		nextInt() and nextLine() Interaction: The nextInt() method reads 
//		an integer input, but it doesn't consume the newline character (\n) 
//		that you press after entering the number. This newline character 
//		is also stored in the input buffer.
//
//		Newline Character Issue: When you then use nextLine() after 
//		nextInt() to read a string input (like "Bharath Srinath"), 
//		nextLine() reads the leftover newline character from the buffer, 
//		thinking that it's an empty line. As a result, it doesn't wait 
//		for you to enter the string input, and it appears as if the 
//		input is skipped.
//
//		Solution: By adding an extra input.nextLine() after nextInt(), 
//		you explicitly consume the leftover newline character. This 
//		ensures that the next nextLine() correctly waits for and reads 
//		the string input you enter, avoiding the issue of skipped input.
		
		System.out.print("Enter employee name: ");
		String name= input.nextLine();
		
		System.out.print("Enter employee's department: ");
		String department = input.nextLine();	
		
		System.out.print("Enter employee's salary: ");
		int salary = input.nextInt();
		
		input.close();
		
		Employee_methods employee_details = new Employee_methods(id, name, department, salary);
		System.out.println();
		System.out.print("Entered datas are: ");
		System.out.print(employee_details.print_employee_details());
		


	}
}
	
