package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Jdbc_Connection {
//	Initially you named the class as connection which resulted in the following error
//	Type mismatch: cannot convert from java.sql.Connection to jdbc.Connection
//	Connection is a inbuilt class used for JDBC connectivity. You cannot use that name to create a class.

	public static void main(String[] args) {
		
		String url = "jdbc:mysql://localhost:3306/javademodb";
		String user = "root";
		String pass = "1234";
		
		try {
			Connection connection = DriverManager.getConnection(url, user, pass);
			System.out.println("Connection Successful!");
			connection.close();
		} catch(SQLException e) {
			System.out.println("Cannot connect" + e);
		}
		

	}

}
