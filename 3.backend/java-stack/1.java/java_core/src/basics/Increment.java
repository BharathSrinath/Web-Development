package basics;

public class Increment {

	public static void main(String[] args) {
		
		int x = 4;
		int a = x++ * 2;
		//	Here post-increment is done after the corresponding line is executed.
		//	Hence, 4 * 2 = 8 will be assigned a (now a's value is 8). Then x will be incremented.
		System.out.println(a);

		int y = 4;
		int b = ++y * 2;
		//	Here pre-increment is done before the corresponding line is executed.
		//	Hence, y will be incremented to 5 and then multiplied with 2. 
		System.out.println(b);

	}

}
