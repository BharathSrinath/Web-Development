package oops;

public class Inheritance_rectangle_parent {
	
	int length = 0; 
	int breadth = 0;
	
	public Inheritance_rectangle_parent (int length, int breadth) {
		this.length = length;
		this.breadth = breadth;
	}
	
	public void area() {
		int area = length * breadth;
		System.out.println("Area of a rectangle: "+area);
	}
	
	public void perimeter() {
		double perimeter = 0.5 * length * breadth;
		System.out.println("Perimeter of a rectangle: "+perimeter);
	}
}
