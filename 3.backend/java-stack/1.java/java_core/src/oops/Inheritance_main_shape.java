package oops;

public class Inheritance_main_shape {

	public void print_shape() {
		System.out.println("This is Shape");
	}
	
	public static void main(String[] args) {
		
		Inheritance_child_square square_object = new 
				Inheritance_child_square();
		square_object.print_shape();
		square_object.print_shape_rectangle();

	}

}
