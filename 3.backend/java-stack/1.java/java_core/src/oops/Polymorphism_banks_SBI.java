package oops;

public class Polymorphism_banks_SBI extends Polymorphism_banks_Bank {

	double interestRate = 0.045;

    @Override
    double calculateInterest(double balance) {
        return balance * interestRate;
    }
}
