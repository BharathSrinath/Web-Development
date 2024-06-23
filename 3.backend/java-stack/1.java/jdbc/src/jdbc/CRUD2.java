package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class CRUD2{

	public static void main(String[] args) {
		
		String url = "jdbc:mysql://localhost:3306/mysql";
		String user = "root";
		String pass = "1234";
		
		Scanner input = new Scanner(System.in);
		
		try {
			Connection connection = DriverManager.getConnection(url, user, pass);
			System.out.println("Connection Successful!");
			
			System.out.print("Enter Id: ");
			int id = input.nextInt();
			input.nextLine();
			System.out.print("Enter Name: ");
			String name = input.nextLine();
			System.out.print("Enter Department: ");
			String department = input.nextLine();
			System.out.print("Enter Salary: ");
			int salary = input.nextInt();
			
			String query = "INSERT INTO employees VALUES(?,?,?,?)";
			PreparedStatement pst = connection.prepareStatement(query);
			pst.setInt(1, id);
			pst.setString(2, name);
			pst.setString(3, department);
			pst.setInt(4, salary);
			
			int result = pst.executeUpdate();
			if(result > 0) {
				System.out.println("Data's inserted Successfully!");
			} else {
				System.out.println("Data insertion Failed!");
			}
			connection.close();
			input.close();
		} catch(SQLException e) {
			System.out.println("Cannot connect" + e);
		}
	}

}
