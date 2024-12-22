package oops;

public class Abstract_shapes_Circle 
extends Abstract_shapes_abstract{
	private double radius;

	Abstract_shapes_Circle 
	(double radius) {
        this.radius = radius;
    }

    @Override
    void printArea() {
        double area = Math.PI * radius * radius;
        System.out.println
        ("Area of Circle: " + area);
    }
}
