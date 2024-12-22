package jdbc;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class CRUD1 {

	public static void main(String[] args) {
		
		String url = "jdbc:mysql://localhost:3306/javademodb";
		String user = "root";
		String pass = "1234";
		
		Scanner input = new Scanner(System.in);
		
		try {
			
			Connection connection = DriverManager.getConnection(url, user, pass);
			System.out.println("Connection Successful!");
			
			String query = "SELECT * FROM employees";
			Statement smt = connection.createStatement();
			ResultSet resultAll = smt.executeQuery(query);
			employeeDetails(resultAll);
			
			System.out.print("Enter the department: ");
			String dept = input.nextLine();
			query = "SELECT * FROM employees WHERE Department = ?";
			PreparedStatement pst = connection.prepareStatement(query);
			pst.setString(1, dept);
			ResultSet resultDept = pst.executeQuery();
			employeeDetails(resultDept);
			
			System.out.print("Enter the minimum salary: ");
            int minSalary = input.nextInt();
            System.out.print("Enter the maximum salary: ");
            int maxSalary = input.nextInt();
            query = "SELECT * FROM employees WHERE Salary BETWEEN ? AND ?";
            pst = connection.prepareStatement(query);
			pst.setInt(1, minSalary);
			pst.setInt(2, maxSalary);
			ResultSet resultSalary= pst.executeQuery();
			employeeDetails(resultSalary);
			
			System.out.println("Data from table employees has been obtained Successfully from "+
			connection.getCatalog()+" database!");
			connection.close();
		} catch(SQLException e) {
			System.out.println("Data retrieval unsuccessful!"+e);
		}
		input.close();
	}
	
	public static void employeeDetails(ResultSet result) throws SQLException {
		
		System.out.println("Eid\tFirst_name\tDate_of_join\tDepartment\tPosition\tSalary");
		while(result.next()) {
			int id = result.getInt(1);
			String name = result.getString(2);
			Date doj = result.getDate(3);
			String department = result.getString(4);
			String position = result.getString(5);
			int salary = result.getInt(6);
			System.out.println(id+"\t"+name+"\t\t"+doj+"\t"+department+"\t"+position+"\t"+salary);
		}
	}

}
