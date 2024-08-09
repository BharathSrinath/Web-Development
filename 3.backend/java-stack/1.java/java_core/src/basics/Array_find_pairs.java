package basics;

import java.util.Scanner;

public class Array_find_pairs {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size = input.nextInt();
		
		int[] n = new int[size];
		System.out.println("Enter the elements: ");
		for (int i = 0; i < size; i++) {
			n[i] = input.nextInt();
		}
		
		System.out.print("Enter the sum: ");
		int inputSum = input.nextInt();
		
		input.close();
		
		int pair = 0;
		System.out.println("Pairs:");
		for (int i = 0; i < size; i++) {
			for (int j = i+1; j < size; j++) {
				//	To find repetitive pairs, you can start j from 0 
				//	and add this condition to if (i!=j)
				if (inputSum == n[i]+n[j]) {
					System.out.println(n[i]+","+n[j]);
					pair++;
				}
			}
		}
		
		if (pair == 0) {
			System.out.println("No pairs found");
		}

	}

}
