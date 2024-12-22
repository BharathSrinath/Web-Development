package io_packages;

import java.io.FileInputStream;
import java.io.IOException;

public class Sort_words_in_a_file {

	public static void main(String[] args) {

		try {
			String fname = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\web-development"
					+ "\\3.backend\\java-stack\\1.java\\javabasics\\src\\io_packages\\sort.txt";
			FileInputStream fis = new FileInputStream(fname);
			byte[] result = fis.readAllBytes();
			String stringResult = new String(result);
			String[] words = stringResult.split("\n");
			//	You can also use ("\\s+") - It splits based on any whitespace 
			//	(including spaces, tabs, and newlines)	
			//	But if there are two words in a name, it will consider it as two.		
			for (int i = 0; i < words.length; i++) {
				for (int j = i + 1; j < words.length; j++) {
					if(words[i].compareTo(words[j]) > 0) {
						String temp = words[i];
						words[i] = words[j];
						words[j] = temp;
					}
				}
			}
			for (int i = 0; i < words.length; i++) {
				System.out.print(words[i]);
			}
			fis.close();
		}
		catch(IOException e) {
			e.printStackTrace();
		}
		

	}

}
//Trial and Error: 
//When you wrote 10 words in your file, you did not type a 
//newline character for the last word. Imagine this. After typing the first word,
//you press enter (newline character). Now you are in the second line. So after
//typing the last word, you just saved and exited. So when you split the strings using
//newline character, the last word in your file will always be coupled with the next word
//after sorted (because the last word doesn't have its own newline character).
//To avoid this issue, you can simply add the newline at the end.
