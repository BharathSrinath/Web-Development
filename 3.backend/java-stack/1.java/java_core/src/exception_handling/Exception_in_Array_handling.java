package exception_handling;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception_in_Array_handling {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size = input.nextInt();
		System.out.print("Enter the elements of the array: ");
		int[] array = new int[size];
		for (int i = 0; i < size; i++) {
			array[i] = input.nextInt();
		}
		System.out.print("Enter position1 between 1 and "+(size)+":");
		int position1 = input.nextInt();
		System.out.print("Enter position2 between 1 and "+(size)+":");
		int position2 = input.nextInt();
		
		while(position1 == position2) {
			System.out.println("Position1 and Position2 cannot be same.");
			System.out.println("Enter position2 between 1 and "+(size)+":");
			position2 = input.nextInt();
		}
		
		input.close();
		
		try {
			System.out.println("Division of "+array[position1-1]+" by "+array[position2-1]+" is: "
		+(array[position1-1]/array[position2-1]));
			System.out.println("Modulo of "+array[position1-1]+" by "+array[position2-1]+" is: "
		+(array[position1-1]%array[position2-1]));
		}
		catch(ArithmeticException e) {
			if(array[position2-1] == 0) {
				System.out.println("Cannot be divided by 0");
			} else {
				System.out.println("Too large a value for the data-type to hold");
			}
			e.printStackTrace();
		}
		catch(InputMismatchException e) {
			System.out.println("Kindly Enter whole numbers only");
			e.printStackTrace();
		}
		catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("Kindly enter the position only within the range (1 to 5)");
			e.printStackTrace();
		}

	}

}
