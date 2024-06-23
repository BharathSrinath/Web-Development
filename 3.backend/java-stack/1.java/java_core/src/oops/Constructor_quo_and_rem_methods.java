package oops;

public class Constructor_quo_and_rem_methods {
	
	int n1, n2;
	
	public Constructor_quo_and_rem_methods (int a, int b) {
		this.n1 = a;
		this.n2 = b;
	}
	
	int quo () {
		return n1 / n2;
	}
	
	int rem () {
		return n1 % n2;
	}
}
