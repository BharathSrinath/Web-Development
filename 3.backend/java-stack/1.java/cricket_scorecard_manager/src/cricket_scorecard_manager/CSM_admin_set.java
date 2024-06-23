package cricket_scorecard_manager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CSM_admin_set {
	
	Connection con;

	public CSM_admin_set(Connection connection) {
        this.con = connection;
    }

//	Login
	
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
	
//	Admin - CRUD
	
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
	
	
}
