package cricket_scorecard_manager;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class CSM_dashboard {
	
	Scanner sc=new Scanner(System.in);
	
	   public CSM_dashboard() throws SQLException,InputMismatchException{
		   
		   boolean adminMenuEntered = false;
		   boolean userMenuEntered = false;
		   
		   CSM_connection csmConn = new CSM_connection();
	       Connection connection = csmConn.getConnection();

	        // Pass the connection to other classes
	        CSM_admin_set CSM_admin_set_obj = new CSM_admin_set(connection);
	        CSM_users_set CSM_users_set_obj = new CSM_users_set(connection);
		   
	        while (!adminMenuEntered && !userMenuEntered){
			   System.out.print("Enter 0 for Admin and 1 for User: ");
			   int choice = sc.nextInt();
			   if (choice == 0) {
				   System.out.print("Enter Admin ID: ");
				   int adminId = sc.nextInt();
				   System.out.print("Enter Admin Password: ");
				   String adminPass = sc.next();
				   if(CSM_admin_set_obj.login(adminId, adminPass, choice)) {
					   CSM_admin_get adminObj = new CSM_admin_get(connection);
					   adminObj.Adminmenu();
					   adminMenuEntered = true;
				   }
				   else {
					   System.out.println("Invalid Login Try again!!!");
				   }
			   } else if (choice == 1) {
				   System.out.print("Is your account added by the admin to the database? (Y/N): ");
				   char addedUser = sc.next().charAt(0);
				   if (addedUser == 'Y' || addedUser == 'y') {
					   int id;
					   String pass;
					   System.out.print("Are you a registered user?(Y/N): ");
					   char registeredUser = sc.next().charAt(0);
					   while(true) {
						   if(registeredUser == 'Y' || registeredUser == 'y') {
							   System.out.print("Enter User ID: ");
							   id = sc.nextInt();
							   System.out.print("Enter User Password: ");
							   pass = sc.next();
							   if(CSM_users_set_obj.login(id, pass, choice)) {
								   CSM_users_get userObj = new CSM_users_get(connection);
								   userObj.Usermenu(id);
								   userMenuEntered = true;
								   break;
							   } else {
								   System.out.println("Invalid Login Try again!!!");
								   break;
							   }
						   } else if (registeredUser == 'N' || registeredUser =='n') {
							   String isCredSet;
							   System.out.println("Set your Credentials!");
							   System.out.print("Enter your id given by Admin: ");
							   id  = sc.nextInt();
							   System.out.print("Set your password: ");
							   pass = sc.next();
							   isCredSet = CSM_users_set_obj.setCredentials(id, pass);
							   if(isCredSet.equalsIgnoreCase("registered")) {
								   System.out.print("Your Id is already registered! Kindly login\n");
							   } else if (isCredSet.equalsIgnoreCase("yes")){
								   System.out.println("Password set Successfully. Kindly Login now!");
							   } else {
								   System.out.print("Password set was unsuccessful!");
							   }
							   registeredUser = 'Y';
						   } else {
							   System.out.println("Kindly enter only Y/N");
						   }
					   }
				   } else if (addedUser == 'N' || addedUser == 'n') {
					   System.out.println("Kindly ask Admin to add your details!");
				   } else {
					   System.out.println("Kindly enter only Y/N");
				   }
				   
			   } else {
				   System.out.println("Enter a valid choice!");
			   }
		   }	   
		   
	   }
}
