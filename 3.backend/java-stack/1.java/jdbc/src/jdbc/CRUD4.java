package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class CRUD4 {
	
	public static void main(String[] args) throws SQLException {
		
		Scanner input = new Scanner(System.in);
		Connection con = null;
		
		String url = "jdbc:mysql://localhost:3306/javademodb";
		String user = "root";
		String pass = "1234";
		try {
			con = DriverManager.getConnection(url, user, pass);
			System.out.print("Connection Successful\n");
			
			String query = "CREATE TABLE students (Regno INT, Name VARCHAR(50), Dob DATE, Gender VARCHAR(1), "
						+ "Course VARCHAR(50), Fees INT)";
			PreparedStatement pst = con.prepareStatement(query);
			pst.executeUpdate();
			System.out.println("Table created successfully");
			
			while(true) {
				System.out.println("Choose an option:");
				System.out.println("1. Insert data");
				System.out.println("2. Read data");
				System.out.println("3. Delete data");
				System.out.println("4. Update data");
				System.out.println("0. Exit");
				int choice = input.nextInt();
				
				switch(choice) {
					case 1:
						insert(input, con);
						break;
					case 2:
						read(con);
						break;
					case 3:
						delete(input, con);
						break;
					case 4:
						update(input,con);
						break;
					case 0:
						System.out.println("Exiting...");
						input.close();
						return;
					default:
						System.out.println("Invalid option. Please choose a valid option.");
				}
			}
		}
		catch(SQLException e) {
			System.out.print(e);
		}
	}

	public static void create(Connection con) throws SQLException {
		
	}

	public static void insert(Scanner input, Connection con) throws SQLException {
		try {
			System.out.print("Enter the student Regno: ");
			int regno = input.nextInt();
			System.out.print("Enter the student Name: ");
			String name = input.next();
			System.out.print("Enter the student Dob (yyyy-mm-dd): ");
			String dob = input.next();
			System.out.print("Enter the student Gender: ");
			String gender = input.next();
			System.out.print("Enter the student Course: ");
			String course = input.next();
			System.out.print("Enter the student Fees: ");
			int fees = input.nextInt();
			String query = "INSERT INTO students (Regno, Name, Dob, Gender, Course, Fees) VALUES (?, ?, ?, ?, ?, ?)";
			PreparedStatement pst = con.prepareStatement(query);
			pst.setInt(1, regno);
			pst.setString(2, name);
			pst.setString(3, dob);
			pst.setString(4, gender);
			pst.setString(5, course);
			pst.setInt(6, fees);
			int r = pst.executeUpdate();
			System.out.println(r > 0 ? "Inserted Successfully" : "Failed!");	
		} catch(SQLException e) {
			System.out.println("Failed to insert data. The table might not exist."+e);
		}
	}

	public static void read(Connection con) throws SQLException {
		try {
			String query = "SELECT * FROM students";
			PreparedStatement pst = con.prepareStatement(query);
			ResultSet rs = pst.executeQuery();
			if(!rs.isBeforeFirst()) {
				System.out.println("No data found. The table might be empty or not exist.");
			} else {
				 while(rs.next()){
					System.out.println("Regno: " + rs.getInt("Regno") + ", Name: " + rs.getString("Name") + 
							", Dob: " + rs.getDate("Dob") + ", Gender: " + rs.getString("Gender") + ", Course: " + 
							rs.getString("Course") + ", Fees: " + rs.getInt("Fees"));
				}
			}
		} catch(SQLException e) {
			System.out.println("Failed to read data. The table might not exist.");
		}
	}
	
	public static void delete(Scanner input, Connection con) throws SQLException {
		try {
			System.out.print("Enter the student's Regno to be deleted: ");
			int regno = input.nextInt();
			String query = "DELETE FROM students WHERE Regno = ?";
			PreparedStatement pst=con.prepareStatement(query);
			pst.setInt(1,regno);
			int r=pst.executeUpdate();
			System.out.println(r > 0 ? "Deleted Successfully" : "Failed!");	
		} catch(SQLException e) {
			System.out.println("Failed to delete data");
		}
	}
	
	public static void update(Scanner input, Connection con) throws SQLException {
		try {
			System.out.print("Enter the student's Regno: ");
			int regno = input.nextInt();
			System.out.print("Enter the student's new course: ");
			String course = input.next();
			String query = "UPDATE students SET Course = ? WHERE Regno = ?";
			PreparedStatement pst = con.prepareStatement(query);
			pst.setString(1, course);
			pst.setInt(2, regno);
			int r = pst.executeUpdate();
			System.out.println(r > 0 ? "Course updated Successfully" : "Failed!");	
		} catch(SQLException e) {
			System.out.println("Failed to update data");
		}
	}
}
