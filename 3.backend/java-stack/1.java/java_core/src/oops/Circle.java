package oops;

public class Circle {

	public static void main(String[] args) {
		
		Circle_methods area_and_perimeter_object = new Circle_methods();
		
		area_and_perimeter_object.radius();
		
		double area = area_and_perimeter_object.area();
		System.out.print("Area of a cirlce is: "+area);
		
		double perimeter = area_and_perimeter_object.perimeter();
		System.out.print("\nPerimeter of a cirlce is: "+perimeter);

	}

}
