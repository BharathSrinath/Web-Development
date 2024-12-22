package basics;

public class Largest_of_3_numbers {

	public static void main(String[] args) {

		int a = 100, b = 110, c = 120;
		
		if (a > b && a > c) {
			System.out.print("a is the largest of all 3");
		} else if (b > a && b > c) {
			System.out.print("b is the largest of all 3");
		} else {
			System.out.print("c is the largest of all 3");
		}

	}

}
