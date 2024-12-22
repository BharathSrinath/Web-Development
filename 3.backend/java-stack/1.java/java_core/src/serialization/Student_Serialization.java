package serialization;

import java.io.Serializable;

public class Student_Serialization implements Serializable{
	private static final long serialVersionUID = 1L;
	int reg_no;
	String name;
	float mark;
	public Student_Serialization(int reg_no, 
			String name, float mark) {
		super();
		this.reg_no = reg_no;
		this.name = name;
		this.mark = mark;
	}
	public int getId() {
		return reg_no;
	}
	public void setId(int reg_no) {
		this.reg_no = reg_no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getMark() {
		return mark;
	}
	public void setMark(float mark) {
		this.mark = mark;
	}
	

}
