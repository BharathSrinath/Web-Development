package oops;

import java.util.Scanner;

public class Constructor_Welcome {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = input.nextLine();
        
        input.close();

        if(!name.equals("")) {
        	Constructor_Welcome_methods user= new 
        			Constructor_Welcome_methods(name);
        	user.profession(name);
        } else {
        	Constructor_Welcome_methods guest= new 
        			Constructor_Welcome_methods();
        	guest.profession();
        }

	}

}
