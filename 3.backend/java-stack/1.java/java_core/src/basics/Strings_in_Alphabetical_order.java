package basics;

import java.util.Scanner;

public class Strings_in_Alphabetical_order {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number of Strings: ");
		int number = input.nextInt();
		
		String[] input_words = new String[number];
		System.out.println("Enter the Strings:");
		for (int i = 0; i < number; i++) {
			input_words[i] = input.next();
		}
		
		input.close();
		
		String[] output_words = new String[number];
		boolean[] checked = new boolean[number];
		for (int i = 0; i < number; i++) {
			int index = -1;
            String smallest = "";
			for (int j = 0; j < number; j++) {
				if (!checked[j]) {
					if (index == -1 || input_words[j].compareTo(smallest) < 0) {
	                    smallest = input_words[j];
	                    index = j;
					}
                }
                    
			}
			output_words[i] = smallest;
			checked[index] = true;
		}
		
		System.out.println("Strings in Alphabetical order: ");
		for (int j = 0; j < number; j++) {
			System.out.println(output_words[j]);
		}

	}
}

// Idiot there is a Straight-forward logic (swapping)  and you know that too. But you just made it much more complicated.
//for (int i = 0; i < names.length; i++) {
//	for (int j = i + 1; j < names.length; j++) {
//		if(names[i].compareTo(names[j]) > 0) {
//			String temp = names[i];
//			names[i] = names[j];
//			names[j] = temp;
//		}
//	}
//	System.out.println(names[i]);
//}