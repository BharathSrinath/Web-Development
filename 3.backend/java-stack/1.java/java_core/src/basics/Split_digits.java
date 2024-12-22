package basics;

import java.util.Scanner;

public class Split_digits {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = input.nextInt();
        
        System.out.println("Number is split into: ");
        
        int divisor = 1;
        
        while (number / divisor > 0) {
        	divisor *= 10;
        }
        
        divisor /= 10;
        
        while (divisor > 0) {  
        	int digit = number / divisor;
            System.out.println(digit);
            number %= divisor;
            divisor /= 10;
        }
        
        input.close();
    }

}

// If you don't want the number in given order, there is a even straight-forward logic to it
//while (input > 0){
//int r = n%10;
//n=n/10;
//}
