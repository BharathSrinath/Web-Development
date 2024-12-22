package basics;

import java.util.Scanner;

public class Array_of_chars_to_String {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size = input.nextInt();
		char[] a = new char [size];
		System.out.println("Enter the array of characters: ");
		for (int i = 0; i < size; i++) {
			a[i] = input.next().charAt(0);
		}
		
		input.close();

		String result = "";
		for (int i = 0; i < size; i++) {
			result += a[i];
		}
		System.out.print("String is: "+ result);
	}

}
