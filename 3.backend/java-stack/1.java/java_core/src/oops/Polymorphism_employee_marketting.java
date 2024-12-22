package oops;

import java.util.Scanner;

public class Polymorphism_employee_marketting extends Polymorphism_employee_Employee {

    Polymorphism_employee_marketting(Scanner input) {
        super(input);
    }

    double salesIncentives;

    @Override
    void inputDetails() {
        super.inputDetails();
        System.out.print("Enter Sales Incentives: ");
        salesIncentives = input.nextDouble();
    }

    @Override
    double calculateNetPay() {
        return super.calculateNetPay() +
                salesIncentives;
    }

    @Override
    void displayDetails() {
        super.displayDetails();
        System.out.println("Sales Incentives: " +
                salesIncentives);
    }
}
