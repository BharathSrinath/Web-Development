package demoproject;

import java.sql.SQLException;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Dashboard extends AccordApp{
	
	Scanner sc=new Scanner(System.in);
	
	   public Dashboard() throws SQLException,InputMismatchException{
		   boolean adminMenuEntered = false;
		   boolean userMenuEntered = false;
		   while (!adminMenuEntered && !userMenuEntered){
			   System.out.print("Enter 0 for Admin and 1 for User: ");
			   int choice = sc.nextInt();
			   if (choice == 0) {
				   System.out.print("Enter Admin ID: ");
				   int adminId = sc.nextInt();
				   System.out.print("Enter Admin Password: ");
				   String adminPass = sc.next();
				   if(login(adminId, adminPass, choice)) {
					   Adminmenu();
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
							   if(login(id, pass, choice)) {
								   Usermenu(id);
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
							   isCredSet = setCredentials(id, pass);
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
	   
	   public void Adminmenu() throws SQLException,InputMismatchException {		
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
				
					int r=add(name, dept, salary);
					System.out.println((r>0)?"Added":"Failed");
				}
				else if(n==2) {
					view();
				}
				else if(n==3) {
					System.out.print("Enter ID: ");
					int id=sc.nextInt();
					System.out.print("Enter New Salary: ");
					float salary=sc.nextFloat();
					int r=edit(id,salary);
					System.out.println((r>0)?"Saved":"Failed");
				}
				else if(n==4) {
					System.out.print("Enter ID: ");
					int id=sc.nextInt();
					System.out.println((remove(id)>0)?"Deleted":"Failed");
				}
				else if(n==0) {
					System.out.println("App Closed");
					break;
				}
				else{
					System.out.println("Invalid Choice");
				}
			}
	   }
	   
	   
	   public void Usermenu(int userId) throws SQLException,InputMismatchException {		
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
				
					int r=addUserDetails(userId, email, number, address);
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
					viewUserDetails(userId);
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
					int r = editUserDetails(id, email, number, address);
					System.out.println((r>0)?"Saved":"Failed");
				}
				else if(n==4) {
					System.out.print("Enter ID : ");
					int id=sc.nextInt();
					System.out.println((removeUserDetails(id)>0)?"Deleted":"Failed");
				}
				else if(n==0) {
					System.out.println("App Closed");
					break;
				}
				else{
					System.out.println("Invalid Choice");
				}
			}
	   }
}

