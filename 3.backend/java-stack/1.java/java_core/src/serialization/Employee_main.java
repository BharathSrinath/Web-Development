package serialization;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.Scanner;

public class Employee_main {

	public static void main(String[] args) {

		try {
			Scanner input = new Scanner(System.in);
			System.out.print("Enter ID: ");
			long id = input.nextLong();
			input.nextLine();
			System.out.print("Enter name: ");
			String name = input.nextLine();
			System.out.print("Enter Designation: ");
			String designation = input.nextLine();
			System.out.print("Enter Salary: ");
			double salary = input.nextDouble();
			input.close();
			
			String fname = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\"
					+ "web-development\\3.backend\\java-stack\\1.java\\"
					+ "javabasics\\src\\io_packages\\"+id+".ser";
			FileOutputStream fos = new FileOutputStream(fname);
			ObjectOutputStream oos = new ObjectOutputStream(fos);
			Employee_Serialization emp = new Employee_Serialization
					(id, name, designation, salary);
			oos.writeObject(emp);
			System.out.print("Successfully Serialized!");
			fos.close();
			oos.close();
		}
		catch(IOException e) {
			e.printStackTrace();
		}

	}

}
