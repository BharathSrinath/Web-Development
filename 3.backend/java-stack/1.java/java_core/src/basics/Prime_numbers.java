package basics;

public class Prime_numbers {

	public static void main(String[] args) {
		
        int count, input = 101;
        
        System.out.println("Prime Numbers from 1 to "+input+":");
        
        for (int n = 1; n <= input; n++) {
        	
            count = 0;
            
            for (int i = 2; i <= n/2; i++) {
                if (n % i == 0) {
                    count++;
                    break;
                }
            }
            
            if (count == 0 && n != 1) {
            	 System.out.println(n);
            }
        }
        
       
	}
	
}
