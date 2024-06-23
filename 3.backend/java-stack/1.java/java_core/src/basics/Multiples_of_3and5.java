package basics;

public class Multiples_of_3and5 {

	public static void main(String[] args) {
		
		int n = 50;
		
		for (int i = 1; i <= n; i++) {
			
			if (i % 15 == 0) {
				System.out.println("Accord InfoMatrix");
			} else if (i % 3 == 0) {
				System.out.println("accord");
			} else if (i % 5 == 0){
				System.out.println("infomatrix");
			} else {
				System.out.println(i);
			}
		}

	}

}
