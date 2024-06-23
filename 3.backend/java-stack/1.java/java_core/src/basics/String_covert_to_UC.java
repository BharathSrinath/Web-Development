package basics;

import java.util.Scanner;

public class String_covert_to_UC {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.print("Enter the String: ");
		String string = input.nextLine();
		int size = string.length();
		
		input.close();
		
		char[] upper = new char[size];
		for (int i = 0; i < size; i++) {
			upper[i] = string.charAt(i);
			if(upper[i] >= 'a' && upper[i] <= 'z'){
				upper[i] -= 32;
			}
		}
		
		String result = "";
		for (int i = 0; i < size; i++) {
			result += upper[i];
		}
		System.out.println("String to UpperCase: "+ result);

	}

}
