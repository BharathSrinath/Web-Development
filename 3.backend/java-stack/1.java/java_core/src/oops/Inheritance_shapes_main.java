package oops;

import java.util.Scanner;

public class Inheritance_shapes_main {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.print("Enter side1: ");
		int side1 = input.nextInt();
		System.out.print("Enter side2: ");
		int side2 = input.nextInt();
		
		input.close();
		
		System.out.println("");
		Inheritance_rectangle_parent object_rectangle = new Inheritance_rectangle_parent(side1, side2);
		object_rectangle.area();
		object_rectangle.perimeter();
		
		System.out.println("");
		Inheritance_square_child object_square = new Inheritance_square_child(side1, side2);
		object_square.area();
		object_square.perimeter();

	}

}
