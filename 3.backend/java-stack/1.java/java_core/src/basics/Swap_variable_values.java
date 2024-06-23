package basics;

public class Swap_variable_values {

	public static void main(String[] args) {

		int a = 5;
		int b = 7;
		int c;
		
		System.out.println("Values before swapping:");
		System.out.println("Value of a: "+a);
		System.out.println("Value of b: "+b);
		
		c = a;
		a = b;
		b = c;
		
		System.out.println("Values after swapping:");
		System.out.println("Value of a: "+a);
		System.out.println("Value of b: "+b);

	}

}
