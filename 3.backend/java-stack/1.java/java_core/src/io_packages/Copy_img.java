package io_packages;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Copy_img {

	public static void main(String[] args) {

		try {
			String src = "C:\\Users\\Bharath Srinath\\Downloads\\apjkalamsir.jpeg";
			String des = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development"
					+ "\\3.backend\\java-stack\\1.java\\javabasics\\src\\io_packages\\apjkalamsir_copy.jpeg";
			
			FileInputStream fis = new FileInputStream(src);
			FileOutputStream fos = new FileOutputStream(des);
			
			byte[] result = fis.readAllBytes();
			fos.write(result);
			
			System.out.print("File copied Successfully");
			
			fis.close();
			fos.close();
		}
		catch(IOException e) {
			System.out.print("File copying FAILED!");
			e.printStackTrace();
		}
	}

}
