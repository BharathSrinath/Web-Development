package cricket_scorecard_manager;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class CSM_users_get{
	
	Connection con;

    public CSM_users_get(Connection connection) {
        this.con = connection;
    }

	public void Usermenu(int userId) throws SQLException,InputMismatchException {	
		
		Scanner sc=new Scanner(System.in);
		CSM_users_set CSM_users_set_obj = new CSM_users_set(con);
		
		while(true) {	
			System.out.println("User Dashboard");
			System.out.print("1 - Add\n2 - View\n3 - Edit\n4 - Remove\n");
			System.out.print("0 - Exit\nEnter Your Choice:");
			int n=sc.nextInt();	
			if(n==1) {
				sc.nextLine();
				System.out.print("Enter email: ");
				String email=sc.nextLine();
				System.out.print("Enter mobile number: ");
				String number=sc.nextLine();
				System.out.print("Enter address: ");
				String address = sc.nextLine();
			
				int r=CSM_users_set_obj.addUserDetails(userId, email, number, address);
				if(r==0) {
					System.out.print("You have already entered your details! Want to view? "
							+ "Enter 2.\n\n");
				} else if (r>0) {
					System.out.print("Added!\n");
				} else {
					System.out.print("Failed\n");
				}
			}
			else if(n==2) {
				CSM_users_set_obj.viewUserDetails(userId);
			}
			else if(n==3) {
				System.out.print("Enter ID: ");
				int id=sc.nextInt();
				System.out.print("Enter new email: ");
				sc.nextLine();
				String email=sc.nextLine();
				System.out.print("Enter new mobile number: ");
				String number=sc.nextLine();
				System.out.print("Enter new address: ");
				String address = sc.nextLine();
				int r = CSM_users_set_obj.editUserDetails(id, email, number, address);
				System.out.println((r>0)?"Saved":"Failed");
			}
			else if(n==4) {
				System.out.print("Enter ID : ");
				int id=sc.nextInt();
				System.out.println((CSM_users_set_obj.removeUserDetails(id)>0)?"Deleted":"Failed");
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
