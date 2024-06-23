package basics;

import java.util.Scanner;

public class String_Validation_Password {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.print("Enter your password: ");
		String string = input.nextLine();
		int size = string.length();
		
		input.close();
		
		char c = ' ';
		int numbers = 0, alphabets = 0;
		for (int i = 0; i < size; i++) {
			c = string.charAt(i);
			if(size >=8 && size <= 14) {
				if(c >= '0' && c <= '9' || c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
					if (c >= '0' && c <= '9') {
						numbers++;
					} else if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
						alphabets++;
					}
				} else if (c == ' '){
					System.out.println("Spaces are not allowed!");
					return;
				} else {
					System.out.println("Special characters are not allowed!");
					return;
				}
			}else {
				System.out.println("Password length should be min of 8 and max of 14!");
				return;
			}
		}
		
		if(!(numbers >=1)) {
			System.out.println("password must contain atleast 1 number!");
		} else if (!(alphabets >=1)){
			System.out.println("password must contain atleast 1 alphabet!");
		} else {
			System.out.println("Valid Password!");
		}

	}

}
