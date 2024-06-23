package oops;

import java.util.Scanner;

public class Constructor_Circle {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter the radius: ");
		int r = input.nextInt();
		input.close();

		Constructor_Circle_methods area_and_perimeter_object = 
				new Constructor_Circle_methods(r);
		
		float area = area_and_perimeter_object.area();
		System.out.print("Area of a cirlce is: "+area);
		
		float perimeter = area_and_perimeter_object.perimeter();
		System.out.print("\nPerimeter of a cirlce is: "+perimeter);


	}

}
