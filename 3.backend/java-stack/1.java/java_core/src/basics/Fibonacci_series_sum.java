package basics;

import java.util.Scanner;

public class Fibonacci_series_sum {
//	series of numbers where each number is the sum of the two preceding ones.

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the n value: ");
		int n = input.nextInt();
		
		input.close();
		
		int sum = 0, prev_no1 = 0, prev_no2 = 1, next_num = 0; 
		for (int i = 0; i < n; i++) {
			sum += prev_no1;
			next_num = prev_no1 + prev_no2;
			prev_no1 = prev_no2;
			prev_no2 = next_num;
		}
		
		System.out.print("Sum of the first " + n + " Fibonacci numbers is: " + sum);

	}

}
