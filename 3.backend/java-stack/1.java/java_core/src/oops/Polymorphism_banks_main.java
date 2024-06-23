package oops;

public class Polymorphism_banks_main {

	public static void main(String[] args) {

		Polymorphism_banks_Bank bank = new Polymorphism_banks_Bank();
		Polymorphism_banks_ICICI icici = new Polymorphism_banks_ICICI();
		Polymorphism_banks_SBI sbi = new Polymorphism_banks_SBI();

        double balance = 1_53_896;

        System.out.println("Default Interest: " + bank.calculateInterest(balance));
        System.out.println("Interest from ICICI: " + icici.calculateInterest(balance));
        System.out.println("Interest from SBI: " + sbi.calculateInterest(balance));

	}

}
