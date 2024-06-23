package collections;

import java.util.Enumeration;
import java.util.Scanner;
import java.util.Vector;

public class Collection_List_Vector_basic {

	public static void main(String[] args) {
		
		Vector<Double> vector = new Vector<Double>();
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number of elements: ");
		int size = input.nextInt();
		System.out.println("Enter the elements of Vector:");
		input.nextLine();
		for (int i = 0; i < size; i++) {
			vector.add(input.nextDouble());
		}
		input.close();
		double total = 0;
		Enumeration<Double> enumeration = vector.elements();
		while(enumeration.hasMoreElements()) {
			total += enumeration.nextElement();
		}
		System.out.println("Total: "+ total);

	}

}
