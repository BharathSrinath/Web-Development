package oops;

public class Abstract_shapes_main {

	public static void main(String[] args) {
		
		Abstract_shapes_Rectangle  rectangle = new Abstract_shapes_Rectangle (5, 10);
		Abstract_shapes_Triangle  triangle = new Abstract_shapes_Triangle (4, 6);
		Abstract_shapes_Circle circle = new Abstract_shapes_Circle(3);

        rectangle.printArea();
        triangle.printArea();
        circle.printArea();

	}

}
