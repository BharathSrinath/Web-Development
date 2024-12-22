package servlets;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Stack;

public class DBCode {

    String url = "jdbc:mysql://localhost:3306/javademodb";
    String user = "root";
    String pass = "1234";

    // connection 
    Connection con = null;

    public DBCode() throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        con = DriverManager.getConnection(url, user, pass);
    }

    public int addUser(String firstname, String lastname, String email, String password) throws SQLException {
    	String q = "INSERT INTO gmailusers(firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
    	try {
    		if(firstname.isEmpty() || lastname.isEmpty() || email.isEmpty() || password.isEmpty() ) {
    			return -2;
    		}
    		PreparedStatement pst = con.prepareStatement(q);
            pst.setString(1, firstname);
            pst.setString(2, lastname);
            pst.setString(3, email);
            pst.setString(4, password);
            int r = pst.executeUpdate();
            return r;
    	} catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
            return -1;
        }
    	
    }
    
    public Stack<JJ4_Part2_Gmail_Data> compare(String email, String password) throws SQLException {
    	Stack<JJ4_Part2_Gmail_Data> user=new Stack<>();
		String q = "SELECT * FROM gmailusers WHERE email = ?";
		PreparedStatement pst = con.prepareStatement(q);
		pst.setString(1, email);
        ResultSet rs = pst.executeQuery();
        if (rs.next()) {
            String storedEmail = rs.getString("email");
            String storedPassword = rs.getString("password");

            if (storedEmail.equals(email) && storedPassword.equals(password)) {
                JJ4_Part2_Gmail_Data data = new JJ4_Part2_Gmail_Data(
                    rs.getString("firstname"),
                    rs.getString("lastname"),
                    rs.getString("email")
                );
                user.push(data);
                return user;
            } 
        }
        rs.close();
        return null;
    }
    
    public int deleteUser(String email) throws SQLException {
    	String q = "DELETE FROM gmailusers WHERE email = ?";
    	PreparedStatement pst = con.prepareStatement(q);
		pst.setString(1, email);
		int r=pst.executeUpdate();
		return r;
    }
    
    public String selectDescription(String planguage) throws SQLException{
    	String q = "SELECT description FROM technology WHERE planguage = ?";
    	String desc = "";
    	PreparedStatement pst = con.prepareStatement(q);
		pst.setString(1, planguage);
		ResultSet rs = pst.executeQuery();
		while(rs.next()) {
			desc = rs.getString("description");
		}
		return desc;
    }
    
    public int updatePassword(String email, String password) throws SQLException{
    	String q = "UPDATE gmailusers SET password = ? WHERE email = ?";
		PreparedStatement pst = con.prepareStatement(q);
		pst.setString(1, password);
        pst.setString(2, email);
        int r = pst.executeUpdate();
        return r;
	}
    
    public Stack<JJ8_Part2_Employee_Data> selectEmployeeDetails(int empid) throws SQLException {
    	Stack<JJ8_Part2_Employee_Data> employee = new Stack<>();
		String q = "SELECT * FROM employees WHERE Eid = ?";
		PreparedStatement pst = con.prepareStatement(q);
		pst.setInt(1, empid);
        ResultSet rs = pst.executeQuery();
        if (rs.next()) {
        	int id = rs.getInt("Eid");
            String name = rs.getString("First_name");
            String department = rs.getString("Department");
            String designation = rs.getString("Position");
            String salary = rs.getString("Salary");

        	JJ8_Part2_Employee_Data empData = new JJ8_Part2_Employee_Data (id, name, department, designation, salary);
        	employee.push(empData);
            return employee;
        }
        rs.close();
        return null;
    }
	
}
