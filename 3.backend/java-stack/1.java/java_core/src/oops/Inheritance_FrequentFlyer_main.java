package oops;

import java.util.Scanner;

public class Inheritance_FrequentFlyer_main {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.println("Frequent Flyers: ");
		System.out.println("1. Platinum");
		System.out.println("2. Gold");
		System.out.print("Select your Membership option 1 or 2: ");
		int option = input.nextInt();
		
		input.close();
		
		System.out.println("");
		
		if (option == 1) {
			System.out.print("Feaures of Platinum membership");
			Inheritance_FrequentFlyer_Platinum_membership platinum = 
					new Inheritance_FrequentFlyer_Platinum_membership();
			platinum.lounge_access();
			platinum.waiting_room_access();
		} else if (option == 2) {
			System.out.print("Feaures of Gold membership");
			Inheritance_FrequentFlyer_Gold_membership gold = 
					new Inheritance_FrequentFlyer_Gold_membership();
			gold.waiting_room_access();
		}

	}

}
