package cricket_scorecard_manager;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class CSM_admin_get{
	
	 Connection con;

	    public CSM_admin_get(Connection connection) {
	        this.con = connection;
	    }

	public void Adminmenu() throws SQLException,InputMismatchException {		
		
		Scanner sc=new Scanner(System.in);
		CSM_admin_set CSM_admin_set_obj = new CSM_admin_set(con);
		
		while(true) {	
			System.out.println("Admin Dashboard");
			System.out.print("1 - Register\n2 - View\n3 - Edit\n4 - Remove\n");
			System.out.print("0 - Exit\nEnter Your Choice: ");
			int n=sc.nextInt();	
			if(n==1) {
				sc.nextLine();
				System.out.print("Enter Name: ");
				String name=sc.nextLine();
				System.out.print("Enter Department: ");
				String dept=sc.nextLine();
				System.out.print("Enter Salary: ");
				float salary=sc.nextFloat();
			
				int r=CSM_admin_set_obj.add(name, dept, salary);
				System.out.println((r>0)?"Added":"Failed");
			}
			else if(n==2) {
				CSM_admin_set_obj.view();
			}
			else if(n==3) {
				System.out.print("Enter ID: ");
				int id=sc.nextInt();
				System.out.print("Enter New Salary: ");
				float salary=sc.nextFloat();
				int r= CSM_admin_set_obj.edit(id,salary);
				System.out.println((r>0)?"Saved":"Failed");
			}
			else if(n==4) {
				System.out.print("Enter ID: ");
				int id=sc.nextInt();
				System.out.println((CSM_admin_set_obj.remove(id)>0)?"Deleted":"Failed");
			}
			else if(n==0) {
				System.out.println("App Closed");
				break;
			}
			else{
				System.out.println("Invalid Choice");
			}
		}
		sc.close();
   }
}
