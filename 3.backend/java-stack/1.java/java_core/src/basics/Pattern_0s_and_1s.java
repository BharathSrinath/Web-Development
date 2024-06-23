package basics;

import java.util.Scanner;

public class Pattern_0s_and_1s {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a size: ");
		int size = input.nextInt();
		
		input.close();
		
		for (int i = 1; i <= size; i++) {
			for (int j = 1; j <= i; j++) {
				if(j%2 == 0) {
					System.out.print("0");
				} else {
					System.out.print("1");
				}
			}
		System.out.println();
		}

	}

}
