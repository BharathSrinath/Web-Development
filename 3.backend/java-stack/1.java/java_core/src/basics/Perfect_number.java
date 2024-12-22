package basics;

public class Perfect_number {
//	Sum of its divisors (excluding the actual number) = number
//	Example: for number = 6, its divisors are 1, 2 and 3. 1 + 2 + 3 = 6

	public static void main(String[] args) {
		
		int number = 8128;
		
		if (number < 1) {
			System.out.print("Enter a number greater than 0");
			return;
		}
		
        int sum = 0;
        for (int i = 1; i <= number/2; i++){
            if (number % i == 0){
                sum += i;
            }
        }
        if (sum == number){
            System.out.println("Entered number is a perfect number");
        } else if (sum != number){
        	System.out.println("Entered number is NOT a perfect number");
        }
	}

}
