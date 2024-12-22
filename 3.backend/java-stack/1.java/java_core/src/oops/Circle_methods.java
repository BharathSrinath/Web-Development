package oops;

import java.util.Scanner;

public class Circle_methods {

	int r = 0;
	
	int radius () {
		System.out.print("Enter the radius: ");
		Scanner input = new Scanner(System.in);
		r = input.nextInt();
		input.close();
		return r;
	}
	
	float area () {
		float A = 3.14F * r * r;
		return A;
	}
	
	float perimeter () {
		float P = 2 * 3.14F * r;
		return P;
	}

}
