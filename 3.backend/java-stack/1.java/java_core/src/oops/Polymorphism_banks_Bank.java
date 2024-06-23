package oops;

public class Polymorphism_banks_Bank {
	
	double interestRate = 0.03;

    double calculateInterest(double balance) {
        return balance * interestRate;
    }
}
