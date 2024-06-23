package demoproject;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class AccordApp {
	
		String url="jdbc:mysql://localhost:3306/javademodb";
		String user="root";		
		String pass="1234";
		Connection con;	
		
		public AccordApp() throws SQLException{
			con=DriverManager.getConnection(url,user,pass);
		}	
		
//		set password
		
		public String setCredentials(int userId, String password) throws SQLException {
			String q = "select * from userlogin";
			Statement smt = con.createStatement();
			ResultSet rs = smt.executeQuery(q);
			while (rs.next()) {
				int id = rs.getInt("userId");
				if (id == userId) {
					return "registered";
					
				}
			}
			q = "insert into userlogin(userId, pass) values(?,?)";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setInt(1, userId);
			pst.setString(2, password);	
			int rowsAffected = pst.executeUpdate();
		    if (rowsAffected > 0) {
		        return "yes";
		    } else {
		    	return "no";
		    }
		}

//		Login
		
		public boolean login(int id,String pass, int choice) throws SQLException{
			boolean res = false;
			String q = "";
			if(choice == 0){
				q = "select * from adminlogin where adminId=? and pass=?";
			} else if (choice == 1) {
				q = "select * from userlogin where userId=? and pass=?";
			}
			PreparedStatement pst=con.prepareStatement(q);
			pst.setInt(1, id);
			pst.setString(2, pass);	
			ResultSet rs=pst.executeQuery();
			while(rs.next()) {
				res=!res;
			}
			return res;
		}
		
//		Admin - CRUD
		
		public int add(String name,String dept,float sal) throws SQLException {
			String q="insert into admin_employee_details(name,dept,salary) values(?,?,?)";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setString(1, name);
			pst.setString(2, dept);
			pst.setFloat(3, sal);
			int r=pst.executeUpdate();
			return r;		
		}
		
		public void view() throws SQLException{
			String q="select *from admin_employee_details";
			PreparedStatement pst=con.prepareStatement(q);
			ResultSet rs=pst.executeQuery();
			if (!rs.isBeforeFirst()) { 
				System.out.print("Empty set!\n");
			} else {
				while(rs.next()) {
					System.out.println();
					System.out.println("ID : "+rs.getInt(1));
					System.out.println("NAME : "+rs.getString(2));
					System.out.println("DEPARTMENT : "+rs.getString(3));
					System.out.println("SALARY : "+rs.getFloat(4));
					System.out.println();
				}
			}
		}
		
		public int edit(int id,float sal) throws SQLException {
			String q="update admin_employee_details set salary=? where id=?";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setFloat(1, sal);
			pst.setInt(2,id);
			int r=pst.executeUpdate();
			return r;		
		}

		public int remove(int id) throws SQLException {
			String q="delete from admin_employee_details where id=?";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setInt(1,id);
			int r=pst.executeUpdate();
			return r;		
		}
		
//		User - CRUD
		
		public int addUserDetails(int userId, String email, String number, String address) 
				throws SQLException {
			String q = "select * from user_employee_details";
			Statement smt = con.createStatement();
			ResultSet rs = smt.executeQuery(q);
			if(rs.next()) {
				return 0;
			} else {
				q="insert into user_employee_details(eid, email, phone_number, address) "
						+ "values(?,?,?,?)";
				PreparedStatement pst=con.prepareStatement(q);
				pst.setInt(1, userId);
				pst.setString(2, email);
				pst.setString(3, number);
				pst.setString(4, address);
				int r=pst.executeUpdate();
				return r;		
			}
		}
		
		public void viewUserDetails(int userId) throws SQLException{
			String q="select * from user_employee_details where eid = ?";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setInt(1, userId);
			ResultSet rs=pst.executeQuery();
			 if (!rs.isBeforeFirst()) { 
				 // Check if the result set is empty without moving the cursor
				 //	Generally rs.next() moves the cursor to the nextLine. So while moving to the 
				 	//	while loop, it is checking from the second line which we don't want.
				System.out.print("Empty set!\n");
			} else {
				System.out.println();
				while(rs.next()) {
					System.out.println("Email: "+rs.getString(2));
					System.out.println("Phone Number: "+rs.getString(3));
					System.out.println("Address: "+rs.getString(4));
					System.out.println();
				}
			}
			
		}
		
		public int editUserDetails(int id, String email, String number, String address) 
				throws SQLException {
			String q="update user_employee_details set email=?, phone_number=?, address=? where eid=?";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setString(1, email);
			pst.setString(2, number);
			pst.setString(3, address);
			pst.setInt(4,id);
			int r=pst.executeUpdate();
			return r;		
		}

		public int removeUserDetails(int id) throws SQLException {
			String q="delete from user_employee_details where eid=?";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setInt(1,id);
			int r=pst.executeUpdate();
			return r;		
		}
}