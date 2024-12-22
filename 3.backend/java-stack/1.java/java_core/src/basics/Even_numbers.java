package basics;

public class Even_numbers {

	public static void main(String[] args) {
		
		int input = 20;
		
		System.out.println("Even numbers from 1 to "+input+": ");
		
		for (int i = 2; i <= input; i++) {
			
			if (i % 2 == 0) {
				
				System.out.println(i);
			
			}
		}
			
		
	}

}
