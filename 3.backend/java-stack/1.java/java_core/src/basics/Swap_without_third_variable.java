package basics;

public class Swap_without_third_variable {

	public static void main(String[] args) {
		int a = 5;
		int b = 7;
		
		System.out.println("Values before swapping:");
		System.out.println("Value of a: "+a);
		System.out.println("Value of b: "+b);
		
		a = a + b;
		b = a - b;
		a = a - b;
		
		System.out.println("Values after swapping:");
		System.out.println("Value of a: "+a);
		System.out.println("Value of b: "+b);

	}

}
