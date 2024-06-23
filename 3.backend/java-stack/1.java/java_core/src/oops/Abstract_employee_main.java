package oops;

public class Abstract_employee_main {

	public static void main(String[] args) {

		Abstract_employee_Marketting  marketing = new Abstract_employee_Marketting();
		Abstract_employee_newJoinee  newJoinee = new Abstract_employee_newJoinee();

        marketing.attendance();
        marketing.salary(49750, 2575);
        marketing.salary(49750, 2575, 13250);
        marketing.removeEmployee();

        newJoinee.attendance();

	}

}
