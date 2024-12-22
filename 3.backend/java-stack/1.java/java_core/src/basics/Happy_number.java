package basics;

import java.util.Scanner;

public class Happy_number {
// Happy number is a number whose sum of the square of the digits = 1 where the summation is carried out until the number is reduced to a single digit.

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number: ");
		int n1 = input.nextInt();
		
		input.close();
		
		int digit = 0, square = 0, sum = 0;
		while (n1 > 0){
			digit = n1 % 10;
			square = digit * digit;
			sum += square;
			n1 /= 10;
			if (n1 == 0 && sum > 9) {
				n1 = sum;
				sum = 0;
			}
		}
		
		System.out.println(sum == 1 ? "Happy Number" : "Not a Happy Number");

	}

}
