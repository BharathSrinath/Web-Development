package oops;

import java.util.Scanner;

public class Polymorphism_employee_Employee {

	int staffId;
    String name;
    double basicSalary, allowances;
	Scanner input;
    
    Polymorphism_employee_Employee(Scanner input){
    	this.input = input;
    }

    void inputDetails() {
        
        System.out.print("Enter Staff ID: ");
        staffId = input.nextInt();
        input.nextLine();
        System.out.print("Enter Name: ");
        name = input.nextLine();
        System.out.print("Enter Basic Salary: ");
        basicSalary = input.nextDouble();
        System.out.print("Enter Allowances: ");
        allowances = input.nextDouble();
        
    }

    double calculateNetPay() {
        return basicSalary + allowances;
    }

    void displayDetails() {
        System.out.println("Staff ID: " + staffId);
        System.out.println("Name: " + name);
        System.out.println("Basic Salary: " + 
        basicSalary);
        System.out.println("Allowances: " + 
        allowances);
        System.out.println("Net Pay: " +
        calculateNetPay());
    }
}
