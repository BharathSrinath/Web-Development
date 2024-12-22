package oops;

import java.util.Scanner;

public class Inheritance_Employee_main {

	public static String name, designation, department;
	public static int id, salary;
	public static char marketting;
	
	public static void main(String[] args) {

		get_employee_details();

	}
	
	public static void get_employee_details() {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the Employee details");
		System.out.print("\nEnter the name of the employee: ");
		name = input.nextLine();
		System.out.print("Enter the id number: ");
		id = input.nextInt();
		input.nextLine();
		System.out.print("Enter the designation: ");
		designation = input.nextLine();
		System.out.print("Enter the department: ");
		department = input.nextLine();
		System.out.print("Enter your salary: ");
		salary = input.nextInt();
		
		System.out.print("Does employee work in marketting?(y/n): ");
		marketting = input.next().charAt(0);
		
		if(Character.toLowerCase(marketting) == 'y') {
			System.out.print("Enter employees incentives: ");
			int incentives = input.nextInt();			
			Inheritance_Employee_marketting marketting_employee = new Inheritance_Employee_marketting(incentives);
			incentives = marketting_employee.total_salary_marketting();
			salary += incentives;
		}
		
		input.close();

		System.out.println("");
		
		print_employee_details(salary);
		
	}
	
	public static void print_employee_details(int salary) {
		
		System.out.println("Entered Employee details: ");
		System.out.println("Name: "+name);
		System.out.println("ID: "+id);
		System.out.println("Designation: "+designation);
		System.out.println("Department: "+department);
		System.out.println("Salary: "+salary);
		
	}
		
}
