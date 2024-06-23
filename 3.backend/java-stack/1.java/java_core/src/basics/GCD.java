package basics;

public class GCD {

	public static void main(String[] args) {

		int first = 15, second = 30;
        int temp = 0;
		
		while (second != 0) {
			//	This is known as Euclidean algorithm
            temp = second;
            second = first % second;
            first = temp;
        }
		
		System.out.println("GCD is: " + first);

	}

}
