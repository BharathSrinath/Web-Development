package exception_handling;

import java.util.Scanner;

public class VoteEligibility_main {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = input.nextInt();
        
        VoteEligibility_check check = new 
        		VoteEligibility_check();
        
        try {
            check.checkVotingEligibility(age);
        } catch (NegativeAgeException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
        	input.close();
        }

	}

}
