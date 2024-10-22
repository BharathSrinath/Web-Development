package oops;

public class Constructor_Banking_methods {

	int balance;
	
	public Constructor_Banking_methods (int balance) {
		this.balance = balance;
	}
	
	int deposit (int add) {
		balance += add;
		return  balance;
	}
	
	int withdraw (int sub) {
		balance -= sub;
		return  balance;
	}

}
