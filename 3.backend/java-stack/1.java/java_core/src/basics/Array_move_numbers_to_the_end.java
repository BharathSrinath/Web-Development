package basics;

import java.util.Scanner;

public class Array_move_numbers_to_the_end {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the String: ");
		String string = input.nextLine();
		
		input.close();
		
		String others = "", numbers = "";
		for (int i = 0; i < string.length(); i++) {
			if(!(string.charAt(i) >= '0' && string.charAt(i) <= '9')) {
				others += string.charAt(i);
			} else {
				numbers += string.charAt(i);
			}
		}
		
		String output = others + numbers;
		
		System.out.println("String after moving the numbers to the end: "+output);
	}

}
