package basics;

public class GCD {

	public static void main(String[] args) {

		int first = 29, second = 30;
//        int temp = 0;
//		
//		while (second != 0) {
//			//	This is known as Euclidean algorithm
//            temp = second;
//            second = first % second;
//            first = temp;
//        }
		
//		Using recursion
		System.out.println("GCD is: " +gcd(first, second));

	}
	static int gcd(int a, int b) {
        // code here
        // LCM: Smallest positive integer that is divisible by each of them.
            // Example: For 6 and 18, LCM is 18
        // HCF/GCD: largest positive integer that divides each of them 
        // without leaving a remainder.
            // Example: For 6 and 18, HCF is 6
        // Note (Just remember):  The product of the HCF and LCM of any two 
        // numbers is always equal to the product of those two numbers.
         if (a == 0) {
            return b;
        }
        return gcd(b % a, a);
	}

}
