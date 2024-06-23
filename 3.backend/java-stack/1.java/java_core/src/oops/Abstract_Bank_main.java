package oops;

public class Abstract_Bank_main {

	public static void main(String[] args) {
		
		Abstract_Bank_bankA bankA = new Abstract_Bank_bankA();
		Abstract_Bank_bankB bankB = new Abstract_Bank_bankB();
		Abstract_Bank_bankC bankC = new Abstract_Bank_bankC();
		
		System.out.println("Balance in Bank A: $" + bankA.getBalance());
        System.out.println("Balance in Bank B: $" + bankB.getBalance());
        System.out.println("Balance in Bank C: $" + bankC.getBalance());
	}

}
