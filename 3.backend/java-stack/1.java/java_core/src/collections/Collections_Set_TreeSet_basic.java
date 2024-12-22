package collections;

import java.util.Scanner;
import java.util.TreeSet;

public class Collections_Set_TreeSet_basic {

	public static void main(String[] args) {
		
		TreeSet<String> ts = new TreeSet<String>();
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number of elements: ");
		int size = input.nextInt();
		System.out.println("Enter the elements of Tree Set:");
		input.nextLine();
		String longestString = ""; 
        for (int i = 0; i < size; i++) {
            String element = input.nextLine();
            ts.add(element);
            if (element.length() > longestString.length()) {
                longestString = element;
            }
        }
        System.out.print("Longest string: " + longestString);
        input.close();
	}

}
