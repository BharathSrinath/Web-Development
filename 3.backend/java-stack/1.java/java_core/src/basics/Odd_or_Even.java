package basics;

public class Odd_or_Even {

	public static void main(String[] args) {
		
		int n = 101;
		
		if (n == 0){
			System.out.print(n+" is neither EVEN nor ODD");
		} else if (n%2 == 0) {
			System.out.print(n+" is an Even number");
		} else {
			System.out.print(n+" is an ODD number");
		}

	}

}
