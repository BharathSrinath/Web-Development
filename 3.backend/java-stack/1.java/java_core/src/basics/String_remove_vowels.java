package basics;

import java.util.Scanner;

public class String_remove_vowels {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the word: ");
		String word = input.next();
		
		input.close();
		
		String output = "";
		for (int i = 0; i < word.length(); i++) {
			char letter = Character.toLowerCase(word.charAt(i));
			if (letter != 'a' && letter != 'e' && letter != 'i' && letter != 'o'&& letter != 'u') {
				output += word.charAt(i);
			}
		}
		System.out.print("Word after removing vowels: " + output);

	}

}
