package oops;

public abstract class Abstract_employee_asbtract {
	
	abstract void attendance();

    final void removeEmployee() {
        System.out.println("Employee removed from the system.");
    }
    
    void salary(double basicPay, double pf) {
        double salary = basicPay - pf;
        System.out.println("Salary without incentives: " + salary);
    }

}
