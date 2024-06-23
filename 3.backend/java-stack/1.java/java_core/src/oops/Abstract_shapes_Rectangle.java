package oops;

public class Abstract_shapes_Rectangle 
extends Abstract_shapes_abstract{
	private double length, width;

    Abstract_shapes_Rectangle
    (double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    void printArea() {
        double area = length * width;
        System.out.println("Area of "
        		+ "Rectangle: " + area);
    }
}
