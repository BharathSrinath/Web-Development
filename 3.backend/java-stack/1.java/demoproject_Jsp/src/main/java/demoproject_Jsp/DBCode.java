package demoproject_Jsp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Stack;

public class DBCode {
	String url="jdbc:mysql://localhost:3306/MyAccordApp";
	String user="root";
	String pass="1234";
	
	//connection 
private Connection con;
	
	//Connection
	public DBCode() throws SQLException,ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		con=DriverManager.getConnection(url,user,pass);
	}
	
	//insert 
	public int insert(String pname,String pbrand,float pprice) throws SQLException{
		String q="insert into Product(pname,pbrand,pprice) values (?,?,?)";
		PreparedStatement pst=con.prepareStatement(q);
		pst.setString(1, pname);
		pst.setString(2, pbrand);
		pst.setFloat(3,pprice);
		int r=pst.executeUpdate();
		return r;
	}
	//view
	public Stack<Info> view() throws SQLException{
		
		Stack<Info> st=new Stack<Info>();
		
		String q="select *from Product";
		PreparedStatement pst=con.prepareStatement(q);
		ResultSet rs=pst.executeQuery();
		
		while(rs.next()) {
			int pid=rs.getInt(1);
			String pname=rs.getString(2);
			String pbrand=rs.getString(3);
			float pprice=rs.getFloat(4);
			String psales=rs.getString(5);
			Info i=new Info(pid, pname, pbrand, pprice, psales);
			st.push(i);
		}
		return st;
	}
	
	//specific 
	public Stack<Info> view(int pid) throws SQLException{
		
		Stack<Info> st=new Stack<Info>();
		
		String q="select *from Product where pid=?";
		PreparedStatement pst=con.prepareStatement(q);
		pst.setInt(1, pid);
		ResultSet rs=pst.executeQuery();
		
		while(rs.next()) {
			int id=rs.getInt(1);
			String pname=rs.getString(2);
			String pbrand=rs.getString(3);
			float pprice=rs.getFloat(4);
			String psales=rs.getString(5);
			Info i=new Info(id, pname, pbrand, pprice, psales);
			st.push(i);
		}
		return st;
	}
	
	//update
	public int update(int pid,String pname,float pprice) throws SQLException{
		String q="update product set pname=?,pprice=? where pid=?";
		PreparedStatement pst=con.prepareStatement(q);
		pst.setString(1, pname);
		pst.setFloat(2,pprice);
		pst.setInt(3, pid);
		int r=pst.executeUpdate();
		return r;
	}
	
	//delete
	public int remove(int pid) throws SQLException{
		String q="delete from product where pid=?";
		PreparedStatement pst=con.prepareStatement(q);
		pst.setInt(1, pid);
		int r=pst.executeUpdate();
		return r;
	}
}













