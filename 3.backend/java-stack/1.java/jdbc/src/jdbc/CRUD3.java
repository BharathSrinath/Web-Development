package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class CRUD3 {
	
	public static void main(String[] args) throws SQLException {
		
		Scanner input = new Scanner(System.in);
		Connection con = null;
		
		String url = "jdbc:mysql://localhost:3306/javademodb";
		String user = "root";
		String pass = "1234";
		try {
			con = DriverManager.getConnection(url, user, pass);
			System.out.print("Connection Successful\n");
		}
		catch(SQLException e) {
			System.out.print(e);
		}
		delete(input, con);
		update(input,con);
		input.close();
	}
	
	public static void delete(Scanner input, Connection con) throws SQLException {
		System.out.print("Enter the employee ID to be deleted: ");
		int id = input.nextInt();
		String query = "DELETE FROM employee WHERE id = ?";
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1,id);
		int r=pst.executeUpdate();
		System.out.println(r > 0 ? "Deleted Successfully" : "Failed!");	
	}
	
	public static void update(Scanner input, Connection con) throws SQLException {
		System.out.print("Enter the employee ID: ");
		int id = input.nextInt();
		System.out.print("Enter the employee's new salary: ");
		int salary = input.nextInt();
		String query = "SELECT salary FROM employee where id = ?";
		PreparedStatement pst=con.prepareStatement(query);
		pst.setInt(1, id);
		ResultSet rs = pst.executeQuery();
		if(rs.next()) {
		    if(salary > rs.getInt("salary")) {
		        query = "UPDATE employee SET salary = ? WHERE id = ?";
		        pst = con.prepareStatement(query);
		        pst.setInt(1, salary);
		        pst.setInt(2, id);
		        int r = pst.executeUpdate();
		        System.out.println(r > 0 ? "Salary updated Successfully" : "Failed!");	
		    } else {
		        System.out.print("Entered salary is lower than the existing salary!");
		    }
		}

	}
}
