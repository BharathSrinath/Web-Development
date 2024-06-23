package oops;

public class Swap_variables_methods {
	
	int swapped_a = 0, swapped_b = 0, temp = 0;
	
	void swap (int a, int b) {
		temp = a;
		swapped_a = b;
		swapped_b = temp;
		System.out.print("Swapped variables\na: " +swapped_a+ " "
				+ "and b: "+swapped_b);
	//	limitations faced as of now:
		// 1. Don't know how to return 2 values from a method. So not able to print the updated values in main method.
		// 2. Even if you find a way to do that, i am not sure whether the values will be updated due to the concept called
			// pass by value vs pass by reference
	}

}
