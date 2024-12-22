package basics;

import java.util.Scanner;

public class String_to_Array_using_charAt {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the string: ");
		String word = input.next();
		input.close();
		
		int length = word.length();
		char[] a = new char [length];
		for (int i = 0; i < length; i++) {
			a[i] = word.charAt(i);
			System.out.println("Character at index "+i +" " + a[i]);
		}
	}

}
