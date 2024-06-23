package oops;

public class Abstract_employee_Marketting extends Abstract_employee_asbtract {
	
	@Override
    void attendance() {
        System.out.println("Attendance marked for Marketing employee.");
    }

    void salary(double basicPay, double pf, double incentives) {
        double salary = basicPay - pf + incentives;
        System.out.println("Salary with Incentives: " + salary);
    }
}
