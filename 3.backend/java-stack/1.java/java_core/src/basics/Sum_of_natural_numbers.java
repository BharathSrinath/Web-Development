package basics;

public class Sum_of_natural_numbers {

	public static void main(String[] args) {
		
		int input = 10, sum = 0;
		
		for (int i = 1; i <= input; i++) {
			sum += i;
		}
			
		System.out.print("Sum of natural numbers from 1 to "+input+" is: "+sum);
		
	}

}
