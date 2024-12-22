package io_packages;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class Write_content {

	public static void main(String[] args) {

		try {
			String fname = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development"
					+ "\\3.backend\\java-stack\\1.java\\javabasics\\src\\io_packages\\write_content.txt";
			File file = new File(fname);
			if(file.createNewFile()) {
				System.out.print("File created successfully!");
			} else {
				System.out.print("File already exists!");
				return;
			}
			
			FileOutputStream fos = new FileOutputStream(fname);
			String data = "Avul Pakir Jainulabdeen Abdul Kalam BR was an Indian aerospace scientist and "
					+ "statesman who served as the 11th president of India from 2002 to 2007. He was born and raised in "
					+ "Rameswaram, Tamil Nadu and studied physics and aerospace engineering.";
			byte[] result = data.getBytes();
			fos.write(result);
			System.out.print("\nFile writing is successful!");
			fos.close();
		}
		catch(IOException e) {
			e.printStackTrace();
			System.out.print("Cannot write to file");
		}

	}

}
