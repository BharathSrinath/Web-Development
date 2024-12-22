package io_packages;

import java.io.FileInputStream;
import java.io.IOException;

public class No_of_Alpha_Num_SplSym_and_BlankSpaces {

	public static void main(String[] args) {

		try {
			String fname = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development"
					+ "\\3.backend\\java-stack\\1.java\\javabasics\\src\\io_packages\\"
					+ "Alpha_Num_SplSym_and_BlankSpaces.txt";
			FileInputStream fis = new FileInputStream(fname);
			byte[] result = fis.readAllBytes();
			String stringResult = new String(result);
			int alpha = 0, num = 0, spl = 0, blank = 0;
			for (int i = 0; i < stringResult.length(); i++) {
				if(stringResult.charAt(i) >= 65 && stringResult.charAt(i) <= 90 || 
						stringResult.charAt(i) >= 97 && stringResult.charAt(i) <= 122) {
					alpha++;
				} else if(stringResult.charAt(i) >= '0' && stringResult.charAt(i) <= '9') {
					num++;
				} else if(stringResult.charAt(i) == ' ') {
					blank++;
				} else {
					spl++;
				}
			}
			fis.close();
			System.out.print("Number of Alphabets in the file: "+alpha);
			System.out.print("\nNumber of Numbers in the file: "+num);
			System.out.print("\nNumber of Special Characters in the file: "+spl);
			System.out.print("\nNumber of Blank Spaces in the file: "+blank);
		}
		catch(IOException e) {
			e.printStackTrace();
		}
		
	}

}
