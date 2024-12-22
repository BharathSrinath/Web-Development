package oops;

public class Banking_methods {
	
int balance = 7_89_563;
	
	int deposit (int add) {
		balance += add;
		return  balance;
	}
	
	int withdraw (int sub) {
		balance -= sub;
		return  balance;
	}

}
