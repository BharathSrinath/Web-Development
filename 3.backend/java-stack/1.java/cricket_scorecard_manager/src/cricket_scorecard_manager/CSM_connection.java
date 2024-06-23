package cricket_scorecard_manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class CSM_connection {

	String url="jdbc:mysql://localhost:3306/javademodb";
	String user="root";		
	String pass="1234";
	Connection 	con;
	
	public CSM_connection() throws SQLException {
		con = DriverManager.getConnection(url,user,pass);
		System.out.println("Connection Successful!");
	}

	public Connection getConnection() {
		return con;
	}
	
}
