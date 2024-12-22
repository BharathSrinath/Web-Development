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
		
		int sum = 0;
        int digit = 0;
        int m = n1;
        int digitCount = 0;
        
        while(m > 0){
            m /= 10;
            digitCount++;    
        }
        
        m = n1;
//        int cube_digit = 1;
        while(m > 0){
            digit = m % 10;
//            for (int i = 0; i < digitCount; i++){
//                cube_digit *= digit;     
//            }
//            sum += cube_digit;
//            cube_digit = 1;
            sum += Math.pow(digit, digitCount);
            m /= 10;
        }
		
		System.out.println(n1 == sum ? "Armstrong Number" : "Not an Armstrong Number");

	}

}
