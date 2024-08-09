package servlets;

import java.io.IOException;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

public class JJ10_Part1_TagHandler extends SimpleTagSupport{
	
	String username;
	Integer num1, num2, subject1, subject2, subject3, subject4, subject5;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Integer getNum1() {
		return num1;
	}
	public void setNum1(Integer num1) {
		this.num1 = num1;
	}
	public Integer getNum2() {
		return num2;
	}
	public void setNum2(Integer num2) {
		this.num2 = num2;
	}
	public Integer getSubject1() {
		return subject1;
	}
	public void setSubject1(Integer subject1) {
		this.subject1 = subject1;
	}
	public Integer getSubject2() {
		return subject2;
	}
	public void setSubject2(Integer subject2) {
		this.subject2 = subject2;
	}
	public Integer getSubject3() {
		return subject3;
	}
	public void setSubject3(Integer subject3) {
		this.subject3 = subject3;
	}
	public Integer getSubject4() {
		return subject4;
	}
	public void setSubject4(Integer subject4) {
		this.subject4 = subject4;
	}
	public Integer getSubject5() {
		return subject5;
	}
	public void setSubject5(Integer subject5) {
		this.subject5 = subject5;
	}
	
	@Override
    public void doTag() throws JspException, IOException {
        if (username != null) {
        	getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style = 'color: red'>Welcome, " + username + "!</h3>");
        } else if (num1 != null && num2 != null) {
            int sum = num1 + num2;
            getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style = 'color: red'>Sum: " + sum+"</h3>");
        } else if (subject1 != null && subject2 != null && subject3 != null && subject4 != null && subject5 != null) {
            int total = subject1 + subject2 + subject3 + subject4 + subject5;
            double average = total / 5.0;
            getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style = 'color: red'>Total: " + total + ", Average: " + average+"</h3>");
        } else {
        	getJspContext().getOut().println();
            getJspContext().getOut().print("<h3 style = 'color: red'>Invalid input.</h3>");
        }
    }
	
}
