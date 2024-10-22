package basics;

import java.util.Scanner;

public class Palindrome_Number {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number: ");
		long number = input.nextLong();
		
		input.close();
		
		long divisor = 1;
		//	Changed from int to long (You forgot that divisor value is also getting multiplied 
		//	by 10 within the loop). Hence an integer cannot hold such a big number.
		//	error faced: Exception in thread "main" java.lang.ArithmeticException: / by zero
			//	This error has occurred because, memory that is beyond the size of an integer 
			//	had some garbage values which resulted in the value of divisor = 0 at some point of time.
		int count = 0;;
		while(number/divisor > 0) {
			divisor *= 10;
			count++;
		}
		
		divisor /= 10;
		long digit = 0; 
		int index = 0;
		long[] array = new long[count];
		while(number > 0) {
			digit = number/divisor;
			array[index] = digit;
			index++;
			number %= divisor;
			divisor /= 10;
		}
		
		int equal = 0;
		for (int i = 0; i < count/2; i++) {
			if (array[i] == array[count - i - 1]) {
				equal++;
			} else {
				System.out.print("Not a Palindrome");
				return;
			}
		}

		if (equal == count/2) {
			System.out.print("Palindrome");
		}

	}

}

// There is a straight-forward logic to reverse the number.
// long originalNumber = number;
// long reverseNumber = 0;
// while (number > 0) {
//    long digit = number % 10;
//    reverseNumber = reverseNumber * 10 + digit;
//    number /= 10;
// }
