package oops;

public class Polymorphism_banks_ICICI extends Polymorphism_banks_Bank {
	
	double interestRate = 0.04;

    @Override
    double calculateInterest(double balance) {
        return balance * interestRate;
    }
}
