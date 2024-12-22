package io_packages;

import java.io.FileReader;
import java.io.IOException;

public class Count_chars_in_a_file {

	public static void main(String[] args) {
	
		try {
			String fname = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development\\3.backend\\"
					+ "java-stack\\1.java\\javabasics\\src\\io_packages\\count_chars_in_a_file.txt";
			FileReader fr = new FileReader(fname);
			int charCount = 0;
            
            while (fr.read() != -1) {
                charCount++;
            }
            
            fr.close();

            System.out.println("Number of characters in the file: " + charCount);
		}
		catch(IOException e){
			System.out.println("File not found");
			e.printStackTrace();
		}
	}

}
