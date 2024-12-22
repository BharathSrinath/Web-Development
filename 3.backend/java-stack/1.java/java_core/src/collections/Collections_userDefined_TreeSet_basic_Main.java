package collections;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.TreeSet;

public class Collections_userDefined_TreeSet_basic_Main {

	public static void main(String[] args) {
		
		try {
			Collections_userDefined_TreeSet_basic_DBCode db = 
					new Collections_userDefined_TreeSet_basic_DBCode();
			TreeSet<Collections_userDefined_TreeSet_basic_Students> students = 
					db.select();
			
			Iterator<Collections_userDefined_TreeSet_basic_Students> iterator = 
					students.iterator();
			
			int studentCount = 0;
			while(iterator.hasNext()) {
				
				Collections_userDefined_TreeSet_basic_Students student = 
						iterator.next();
				System.out.print("\nStudent "+(++studentCount)+
						"\n1. Student ID: "+student.sid() +
						"\n2. Name: "+student.name()+
						"\n3. Course: "+student.course()+
						"\n4. Mobile "+student.mobile()+
						"\n5. Email: "+student.mailid()+"\n");
				
			}
		} 
		catch(SQLException e) {
			System.out.println(e);
		}
		
	}

}
