package oops;

public class Method_first_program {

	String message(String name) {
		
		String msg = "Welcome " +name;
		return msg;
	}
	
	public static void main(String[] args) {
		
		Method_first_program demo = new Method_first_program();
		String result = demo.message("Bharath Srinath");
		System.out.println(result);

	}

}
