package oops;

public class Inheritance_Employee_marketting {
	
	int sales_incentives = 0, total_salary = 0;
	
	public Inheritance_Employee_marketting(int sales_incentives ) {
		this.sales_incentives= sales_incentives; 
	}
	
	public int total_salary_marketting() {
		total_salary += sales_incentives;
		return total_salary;
	}

}
