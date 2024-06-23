package oops;

import java.util.Scanner;

public class Swap_variables {
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a: ");
		int a = input.nextInt();
		System.out.print("Enter b: ");
		int b = input.nextInt();
		
		input.close();
		
		System.out.println("Entered values\na: "+a+ " "
				+ "and b: "+b);
		
		Swap_variables_methods swap_object = new 
				Swap_variables_methods();
		swap_object.swap(a,b);

	}

}
