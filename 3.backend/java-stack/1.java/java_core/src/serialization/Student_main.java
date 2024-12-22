package serialization;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.Scanner;
public class Student_main {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			while(true) {
				System.out.print("Enter Register Number: ");
				int reg_no = input.nextInt();
				System.out.print("Enter Name: ");
				String name = input.next();
				System.out.print("Enter Mark: ");
				float mark = input.nextFloat();
				File file = new File("C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development"
						+ "\\3.backend\\java-stack\\1.java\\javabasics\\src\\io_packages\\"+name+".ser");
				if (file.exists()) {
	                throw new IOException("File already exists");
	            }
				FileOutputStream fos = new FileOutputStream(file);
				ObjectOutputStream oos = new ObjectOutputStream(fos);
				Student_Serialization st = new Student_Serialization(reg_no, name, mark);
				oos.writeObject(st);
				System.out.print("Successfully Serialized!");
				fos.close();
				oos.close();
				System.out.print("\nEnter 0 to add more students or any other number to quit!");
				int s = input.nextInt();
				if(s != 0) {
					System.out.print("App Closed!");
					break;
				}
			}
		}
		catch(Exception e) {
			System.out.print("Error: "+e);
		}
		finally {
			input.close();
		}

	}

}
