package oops;

public class Inheritance_square_child extends Inheritance_rectangle_parent{
	
	public Inheritance_square_child(int length, int breadth) {
		super(length, length);
	}
	
	public void area() {
		int area = length * length;
		System.out.println("Area of a square: "+area);
	}
	
	public void perimeter() {
		double perimeter = 4 * length;
		System.out.println("Perimeter of a square: "+perimeter);
	}
	
}
