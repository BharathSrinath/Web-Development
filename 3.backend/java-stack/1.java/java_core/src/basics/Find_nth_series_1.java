package basics;

import java.util.Scanner;

public class Find_nth_series_1 {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the series: ");
		int size = input.nextInt();
		
		System.out.println("Enter the series: ");
		int[] input_series = new int[size];
		for (int i = 0; i < size; i++) {
			input_series[i] = input.nextInt();
		}
		
		input.close();
		
		System.out.print("Entered series: ");
		for (int i = 0; i < size; i++) {
			System.out.print(" "+input_series[i]);
		}
		
		int n = size + 1;
		int nth_element = (n* (n+ 1))/2;
		System.out.println("\nnth element of the series is "+nth_element);
		
	}

}
