package basics;

import java.util.Scanner;

public class Strong_number {
// sum of factorial of its digits is equal to the number itself
//	abc = a! + b! + c!
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number: ");
		int n1 = input.nextInt();
		
		input.close();
		
		int digit = 0, factorial = 1, sum = 0;
		int n2 = n1;
		while(n1 > 0) {
			digit = n1 % 10;
			for (int i = 1; i <= digit; i++ ) {
				factorial *= i;
			}
			sum += factorial;
			factorial = 1;
			n1 /= 10;
		}
		
		System.out.println(n2 == sum ? "Strong Number" : "Not a Strong Number");

	}

}
