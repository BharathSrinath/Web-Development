package oops;

public class Polymorphism_box_main {

	public static void main(String[] args) {
		
		Polymorphism_box_Areas area = new Polymorphism_box_Areas();

        double rectangleArea = area.calculateArea(5, 10);
        double squareArea = area.calculateArea(7);

        System.out.println("Area of Rectangle: " + rectangleArea);
        System.out.println("Area of Square: " + squareArea);

	}

}
