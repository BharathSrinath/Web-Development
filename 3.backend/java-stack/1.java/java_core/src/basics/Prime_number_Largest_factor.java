package basics;

import java.util.Scanner;

public class Prime_number_Largest_factor {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number: ");
		int number = input.nextInt();
		
		input.close();
		
		getLargestPrime(number);
	}
	
	public static void getLargestPrime (int number){
        int largest_prime_factor = 0, count = 0;
        if (number <= 1){
            System.out.println("No Prime factors");
            return;
        }
        for (int i = 1; i <= number; i++){
            if (number % i == 0){
                count = 0;
                innerLoop:
		// This is called labeling. We are labeling the inner for-loop and breaking the entire
		// loop whenever our if condition is satisfied. (Generally break will skip an iteration).
		// Here we are skipping the entire loop.
                for (int k = 2; k * k <= i; k++) {
                    if (i % k == 0) {
                        count++;
                        break innerLoop;
                    }
                }
                if (count == 0){
                    largest_prime_factor = i;
                }
                
            }
        }
        if (largest_prime_factor == 0){
        	System.out.println("No Prime factors");
        	return;
        }
        System.out.println("Largest Prime factor for the number "+number+" is: "+largest_prime_factor);
    }

}
