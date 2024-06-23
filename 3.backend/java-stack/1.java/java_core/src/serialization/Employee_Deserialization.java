package serialization;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;

public class Employee_Deserialization {

	public static void main(String[] args) throws ClassNotFoundException {
		
		try {
			String fname = "C:\\Users\\Bharath Srinath\\Documents\\GitHub"
					+ "\\web-development\\3.backend\\java-stack\\1.java"
					+ "\\javabasics\\src\\io_packages\\311612106022.ser";
			FileInputStream fis = new FileInputStream(fname);
			ObjectInputStream ois = new ObjectInputStream(fis);
			Employee_Serialization emp = (Employee_Serialization)ois.readObject();
			
			System.out.println(emp.getId());
			System.out.println(emp.getName());
			System.out.println(emp.getDesgination());
			System.out.println(emp.getSalary());
			
			System.out.println("Successfully Deserialized!");
			
			fis.close();
			ois.close();
		}
		catch(FileNotFoundException e) {
			e.printStackTrace();
		}
		catch(ClassNotFoundException e) {
			e.printStackTrace();
		}
		catch(IOException e){
			e.printStackTrace();
		}

	}

}
