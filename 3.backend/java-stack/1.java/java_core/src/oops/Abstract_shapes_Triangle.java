package oops;

public class Abstract_shapes_Triangle 
extends Abstract_shapes_abstract{
	private double base, height;

	Abstract_shapes_Triangle
	(double base, double height) {
        this.base = base;
        this.height = height;
    }

    @Override
    void printArea() {
        double area = 0.5 * base * height;
        System.out.println("Area of "
        		+ "Triangle: " + area);
    }
}
