package basics;

import java.util.Scanner;

public class Armstrong_number {
// Sum of its own digits each raised to the power of the number of digits
// abc = a^n + b^n + c^n where is the n is the number of digits in a number
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number: ");
		int n1 = input.nextInt();
		
		input.close();
		
		int divisor = 1, count = 0;
		while (n1/divisor > 0) {
			divisor *= 10;
			count++;
		}
		
		divisor /=10;
		
		int digit = 0, sum = 0, cube_digit = 1;
		int base_value = 0, exp_value = count;
		int n2 = n1;
		while(divisor > 0) {
			digit = n2 / divisor;
			base_value = digit;
			for (int i = 0; i < exp_value; i++) {
				cube_digit *= base_value;
			}
            sum += cube_digit;
            cube_digit = 1;
            n2 %= divisor;
            divisor /= 10;
		}
		
		System.out.println(n1 == sum ? "Armstrong Number" : "Not an Armstrong Number");

	}

}
