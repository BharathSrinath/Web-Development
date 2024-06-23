package basics;

import java.util.Scanner;

public class String_Split_sentence {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the sentence: ");
		String sentence = input.nextLine();
		
		input.close();

		String[] words = sentence.split(" ");
		System.out.println("Words in the sentence are:");
		for (int i = 0; i < words.length; i++) {
			System.out.println(words[i]);
		}
	}

}
