package basics;

import java.util.Scanner;

public class Palindrome_String {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the word: ");
		String word = input.next();
		
		input.close();
		
		int length = word.length();
		int count = 0;
		for (int i = 0; i < length/2; i++) {
			if (Character.toLowerCase(word.charAt(i)) == Character.toLowerCase(word.charAt(length - i - 1))) {
				count++;
			} else {
				System.out.print("Not a Palindrome");
				return;
			}
		}
		
		if (count == length/2) {
			System.out.print("It is a Palindrome");
		}

	}

}
