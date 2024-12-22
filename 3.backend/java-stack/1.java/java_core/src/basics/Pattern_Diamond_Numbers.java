package basics;

import java.util.Scanner;

public class Pattern_Diamond_Numbers {

	public static void main(String[] args) {
		
		long startTime = System.currentTimeMillis();
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a size (odd value): ");
		int size = input.nextInt();
		
		input.close();
		
		int middle = (size/2) + 1;
		int offset_left_top, offset_right, offset_left_bottom;
		int m = 2;
		if(size%2 == 1) {
			for (int i = 1; i <= size; i++) {
				offset_left_top = i; 
				offset_right = 2;
				offset_left_bottom = i - m;
				if (i > middle) {
					m += 2;
				}
				for (int j = 1; j <= size; j++) {
					if(((i >= 1 && i < middle) && (j >= middle - (i-1) && j <= middle + (i-1))) || 
							(i == middle)) {
						if (j < middle) {
							System.out.print(offset_left_top);
							offset_left_top--;
						} else if (j > middle) {
							System.out.print(offset_right);
							offset_right++;
						} else if (j == middle) {
							System.out.print("1");
						}
					} else if ((i > middle && i <= size) && (j >= middle + (i-size) && j <= middle - (i-size))) {
						if (j < middle) {
							System.out.print(offset_left_bottom);
							offset_left_bottom--;
						} else if (j > middle) {
							System.out.print(offset_right);
							offset_right++;
						} else if (j == middle) {
							System.out.print("1");
						}
					}
					else {
						System.out.print(" ");
					}	
				}
			System.out.println();
			}
		} else {
			System.out.println("Kindly enter a odd Value!");
		}
		
		long endTime = System.currentTimeMillis();
        long totalTime = endTime - startTime;

        System.out.println("Total time taken: " + totalTime + " milliseconds");

	}

}

//Much better code - both readability and efficiency
// Top
//    for (int i = 1; i <= middle; i++) {
//        for (int j = 1; j <= middle - i; j++) {
//            System.out.print(" ");
//        }
//        for (int j = i; j >= 1; j--) {
//            System.out.print(j);
//        }
//        for (int j = 2; j <= i; j++) {
//            System.out.print(j);
//        }
//        System.out.println();
//    }
//
// Bottom
//    for (int i = middle - 1; i >= 1; i--) {
//        for (int j = 1; j <= middle - i; j++) {
//            System.out.print(" ");
//        }
//        for (int j = i; j >= 1; j--) {
//            System.out.print(j);
//        }
//        for (int j = 2; j <= i; j++) {
//            System.out.print(j);
//        }
//        System.out.println();
//    }
