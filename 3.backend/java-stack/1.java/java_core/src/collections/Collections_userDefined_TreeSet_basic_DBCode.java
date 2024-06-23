package collections;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.TreeSet;

public class Collections_userDefined_TreeSet_basic_DBCode {

		String url = "jdbc:mysql://localhost:3306/javademodb";
		String user = "root";
		String password = "1234";
		
		Connection connection;
		public Collections_userDefined_TreeSet_basic_DBCode() throws SQLException{
			connection = DriverManager.getConnection(url, user, password);
		}
		
		public TreeSet<Collections_userDefined_TreeSet_basic_Students> select() 
				throws SQLException{
			TreeSet<Collections_userDefined_TreeSet_basic_Students> students = 
					new TreeSet<Collections_userDefined_TreeSet_basic_Students>
			(new Collections_userDefined_TreeSet_basic_Sid());
			String query = "SELECT * FROM student";
			PreparedStatement pst = connection.prepareStatement(query);
			ResultSet rs = pst.executeQuery();
			while(rs.next()) {
				int id = rs.getInt(1);
				String name = rs.getString(2);
				String course = rs.getString(3);
				String mobile = rs.getString(4);
				String mailid = rs.getString(5);
				Collections_userDefined_TreeSet_basic_Students student = 
						new Collections_userDefined_TreeSet_basic_Students
						(id, name, course, mobile, mailid);
				students.add(student);
			}
			return students;
		}
}
