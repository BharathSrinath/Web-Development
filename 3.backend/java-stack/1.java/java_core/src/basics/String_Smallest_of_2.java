package basics;

import java.util.Scanner;

public class String_Smallest_of_2 {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the first String: ");
		String word1 = input.next();
		System.out.print("Enter the second String: ");
		String word2 = input.next();
		
		input.close();

		String smallest = word1.compareTo(word2) < 0 ? word1: word2;
		System.out.print(smallest);
	}

}
