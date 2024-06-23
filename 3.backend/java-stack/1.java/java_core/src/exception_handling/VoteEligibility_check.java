package exception_handling;

public class VoteEligibility_check {

	public void checkVotingEligibility(int age) throws 
	NegativeAgeException {
        if (age < 0) {
            throw new NegativeAgeException("Age cannot be negative.");
        }
        if (age >= 18) {
            System.out.println("Congratulations! "
            		+ "You are eligible to vote.");
        } else {
            System.out.println("Sorry, you are "
            		+ "not eligible to vote.");
        }
    }
}
