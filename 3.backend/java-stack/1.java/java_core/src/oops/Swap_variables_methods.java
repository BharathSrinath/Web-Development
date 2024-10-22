package oops;

public class Swap_variables_methods {
	
	int swapped_a = 0, swapped_b = 0, temp = 0;
	
	void swap (int a, int b) {
		temp = a;
		swapped_a = b;
		swapped_b = temp;
		System.out.print("Swapped variables\na: " +swapped_a+ " "
				+ "and b: "+swapped_b);
	}
}
