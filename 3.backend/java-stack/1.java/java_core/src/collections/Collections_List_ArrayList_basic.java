package collections;

import java.util.ArrayList;
import java.util.Scanner;

public class Collections_List_ArrayList_basic {

	public static void main(String[] args) {

		ArrayList<String> al = new ArrayList<String>();
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number of elements: ");
		int size = input.nextInt();
		System.out.println("Enter the elements of Array List:");
		input.nextLine();
		for (int i = 0; i < size; i++) {
			al.add(input.nextLine());
		}
		System.out.println(al);
		System.out.print("Enter a String to search the elements: ");
		String element = input.nextLine();
		if(al.contains(element)) {
			int occurrences = 0;
	        for (String word : al) {
	            if (word.equals(element)) {
	                occurrences++;
	            }
	        }
			System.out.println(element+" is found within the ArrayList");
			System.out.println("Number of occurences: "+occurrences);
		} else {
			System.out.println(element+" is not found");
		}
		
		input.close();
		
	}

}
