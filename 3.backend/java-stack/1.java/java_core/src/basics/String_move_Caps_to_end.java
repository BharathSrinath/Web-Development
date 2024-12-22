package basics;

import java.util.Scanner;

public class String_move_Caps_to_end {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the word with a mix of capital and small letters: ");
		String word = input.nextLine();
		
		input.close();
		
		int length = word.length();
		
		String lower = "", upper = "";
		for (int i = 0; i < length; i++) {
			//	if(Character.isLowerCase(word.charAt(i))) {
			if (word.charAt(i) >= 'A' && word.charAt(i) <= 'Z') {
				upper += word.charAt(i);
			//	} else if (Character.isUpperCase(word.charAt(i))) {
			} else if (word.charAt(i) >= 'a' && word.charAt(i) <= 'z') {
				lower += word.charAt(i);
			}
		}
// Note: We will hardly use the predefined functions in interview.
		String result = lower + upper;
		System.out.print("Final output is: " + result);

	}

}
