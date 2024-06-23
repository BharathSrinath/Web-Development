package io_packages;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class File_content_reverse {
    public static void main(String[] args) {
        String src = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development"
        		+ "\\3.backend\\java-stack\\1.java\\javabasics\\src\\io_packages\\file_normal.txt";
        String des = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development"
        		+ "\\3.backend\\java-stack\\1.java\\javabasics\\src\\io_packages\\file_reverse.txt";

        FileInputStream fis = null;
        FileOutputStream fos = null;
        try {
            fis = new FileInputStream(src);
            fos = new FileOutputStream(des);
            byte[] result = fis.readAllBytes();
            String stringResult = new String(result);
            String reverse = "";
            for (int i = stringResult.length() - 1; i >= 0 ; i--) {
            	reverse += stringResult.charAt(i);
            }
            byte[] output = reverse.getBytes();
            fos.write(output);
            System.out.println("Content Successfully reversed and saved to file_reverse.txt");
            fis.close();
        	fos.close();
        } catch (IOException e) {
            System.out.print("Error reversing and saving files!");
            e.printStackTrace();
        }
        
    }
}

