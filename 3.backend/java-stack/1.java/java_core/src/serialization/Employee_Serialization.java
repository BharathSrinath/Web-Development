package serialization;

import java.io.Serializable;

public class Employee_Serialization 
implements Serializable{
	private static final long 
	serialVersionUID = 1L;
	long id;
	String name, desgination;
	double salary;
	public Employee_Serialization(long id, 
			String name, String desgination, 
			double salary) {
		super();
		this.id = id;
		this.name = name;
		this.desgination = desgination;
		this.salary = salary;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesgination() {
		return desgination;
	}
	public void setDesgination(String desgination) {
		this.desgination = desgination;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	
}
