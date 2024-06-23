package basics;

import java.util.Scanner;

public class Counting_program {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter your string: ");
		String string = input.nextLine();
		
		input.close();
		
		int alphabets = 0, numbers = 0, space = 0, sp_chars = 0;
		char current = ' ';
		for (int i = 0; i < string.length(); i++) {
			current = string.charAt(i);
			if(current >= 'A' && current <= 'Z' || current >= 'a' && current <= 'z') {
				alphabets++;
			} else if (current >= '0' && current <= '9') {
				numbers++;
			} else if (current == ' ') {
				space++;
			} else {
				sp_chars++;
			}
		}

		System.out.println("No. of alphabets: "+alphabets);
		System.out.println("No. of numbers: "+numbers);
		System.out.println("No. of spaces: "+space);
		System.out.println("No. of special characters: "+sp_chars);

	}

}
