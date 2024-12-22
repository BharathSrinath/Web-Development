package basics;

import java.util.Scanner;

public class Number_to_Words {
	
	public static int getDigitCount(int number){
        int no_of_digits = 0;
        int divisor = 1;
        if (number < 0){
            return -1;
        } else if (number == 0){
            return 1;
        }
        while (number/divisor > 0){
            no_of_digits++;
            divisor *= 10;
        }
        return no_of_digits;
    }
	
    public static int reverse(int number){
            int reversed = 0;
            int number_copy = number;
            while (number_copy != 0) {
                int digit = number_copy % 10;
                reversed = reversed * 10 + digit;
                number_copy /= 10;
            }
            return reversed;
        } 


	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = input.nextInt();
        
        input.close();
	        
	        int divisor = 10; 
	        int remainder = 0;
	        
	        if (number < 0){
	            System.out.print("Invalid Value");
	        }
	        
	        int no_of_digits = getDigitCount(number);
	        int reversed = reverse(number);
	       
	        while(no_of_digits > 0){
	            remainder = reversed % divisor;
	            switch(remainder){
	                case 0:
	                    System.out.print("Zero");
	                    break;
	                case 1:
	                    System.out.print("One");
	                    break;
	                case 2:
	                    System.out.print("Two");
	                    break;
	                case 3:
	                    System.out.print("Three");
	                    break;
	                case 4:
	                    System.out.print("Four");
	                    break;
	                case 5:
	                    System.out.print("Five");
	                    break;
	                case 6:
	                    System.out.print("Six");
	                    break;
	                case 7:
	                    System.out.print("Seven");
	                    break;
	                case 8:
	                    System.out.print("Eight");
	                    break;
	                case 9:
	                    System.out.print("Nine");
	                    break;
	            }
	            reversed /= 10;
	            no_of_digits--;
	            if (no_of_digits > 0){
	                System.out.print(" ");
	            }
	    }
	     
	}

}
