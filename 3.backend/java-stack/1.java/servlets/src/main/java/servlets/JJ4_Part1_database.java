package servlets;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JJ4_Part1_database {
	String url="jdbc:mysql://localhost:3306/MyAccordApp";
	String user="root";
	String pass="1234";
	
	//connection 
	Connection con=null;		
	public JJ4_Part1_database() throws SQLException,ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		con=DriverManager.getConnection(url,user,pass);
	}
	
	//insert
	public int add(String firstName, String  lastName, String userName, String password, 
			String  address, String contact) throws SQLException{
		String q="insert into employee(firstName, lastName, userName, password, "
				+ "address, contact) values(?,?,?,?,?,?)";
		PreparedStatement pst=con.prepareStatement(q);
		pst.setString(1, firstName);
		pst.setString(2, lastName);
		pst.setString(3, userName);
		pst.setString(4, password);
		pst.setString(5, address);
		pst.setString(6, contact);
		int r=pst.executeUpdate();
		return r;
	}
	
}
