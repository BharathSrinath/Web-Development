package oops;

public class Employee_methods {
	
	public int id, salary;
	public String name, department;
	
	public Employee_methods (int id, String name, String department, int salary) {
		this.id = id;
		this.salary = salary;
		this.name = name;
		this.department = department;
	}
	
	String print_employee_details () {
		return "Id: "+id+"\nName: "+name+"\nDepartment: "+department+"\nSalary: "+salary;
	}

}
