package myaccord;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Stack;
public class DBCode {
		//server details
		String url="jdbc:mysql://localhost:3306/MyAccordApp";
		String user="root";
		String pass="1234";
		
		//connection 
		Connection con=null;		
		public DBCode() throws SQLException,ClassNotFoundException{
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection(url,user,pass);
		}
		
		//insert
		public int add(String name,float salary) throws SQLException{
			String q="insert into emp(name,sal) values(?,?)";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setString(1, name);
			pst.setFloat(2, salary);
			int r=pst.executeUpdate();
			return r;
		}
		//view all employees
		public Stack<Data> view() throws SQLException{
			
			Stack<Data> st=new Stack<Data>();
			
			String q="select *from emp";
			PreparedStatement pst=con.prepareStatement(q);
			ResultSet rs=pst.executeQuery();
			
			while(rs.next()) {
				int id=rs.getInt(1);
				String name=rs.getString(2);
				float salary=rs.getFloat(3);
//				Rather than printing the data directly that has been obtained from server,
//				we are pushing it to the Stack. Now under viewServlet, we can get this data 
//				from the Data.java using getters and present them in a tabular format.
				Data s=new Data(id, name, salary);
				st.push(s);
			}
			
			return st;
		}
		//view an individual employee 
			public Stack<Data> view(int id) throws SQLException{
					
					Stack<Data> st=new Stack<Data>();
					
					String q="select name,sal from emp where id=?";
					PreparedStatement pst=con.prepareStatement(q);
					pst.setInt(1, id);
					ResultSet rs=pst.executeQuery();
					
					while(rs.next()) {
						String name=rs.getString(1);
						float salary=rs.getFloat(2);
						
						Data s=new Data(id, name, salary);
						st.push(s);
					}
					
					return st;
				}
		//remove
		public int remove(int id) throws SQLException{
			String q="delete from emp where id=?";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setInt(1, id);
			int r=pst.executeUpdate();
			return r;
		}
		//update
		public int edit(int id,float salary) throws SQLException{
			String q="update emp set sal=? where id=?";
			PreparedStatement pst=con.prepareStatement(q);
			pst.setFloat(1, salary);
			pst.setInt(2, id);
			int r=pst.executeUpdate();
			return r;
		}
}















