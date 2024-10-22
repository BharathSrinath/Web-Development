package basics;

import java.util.Scanner;

public class Array_Remove_duplicates {
//	find duplicates/remove duplicates/ find unique elements

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size = input.nextInt();
		
		int[] array = new int[size];
		System.out.print("Enter the elements of the array: ");
		for (int i = 0; i < size; i++) {
			array[i] = input.nextInt();
		}
		
		input.close();
		
		System.out.print("\nArray with duplicate values: ");
		for (int i = 0; i < size; i++) {
			System.out.print(" "+array[i]);
		}
		
		boolean[] checked = new boolean[size];
		for (int i = 0; i < size; i++) {
			if(!checked[i]) {
				for (int j = i + 1; j < size; j++) {
					if (array[i] == array[j]) {
						checked[j] = true;
						checked[i] = true;
					}
				}
			}
		}
		
		System.out.print("\nArray WITHOUT duplicate values: ");
		int[] removed_duplicates = new int[size];
		for (int i = 0; i < size; i++) {
			if(!checked[i]) {
				removed_duplicates[i] = array[i];
				System.out.print(" "+removed_duplicates[i]);
			}
		}
	}

}

// Simple code for finding duplicates. Above method will remove all the occurrences of a duplicate. 	
	// For an example, int[] a = {1,2,2,1,5}, output will just be 5. 
// for (int i = 0; i < size; i++) {
//	int c = 1;
//	for (int j = i + 1; j < size; j++) {
//		if (array[i] == array[j]) {
//			c++;
//		}
//	}
//	
//	if (c==2) { For removal code, c==1
//		SOP(array[i]+"");
//	}
//		}

// Simple code for unique elements - Exactly achieves your code
//for (int i = 0; i < size; i++) {
//int c = 0;
//	for (int j = 0; j < size; j++) {
//		if (array[i] == array[j] && i!=j) {
//			c++;
//		}
//	}
//	
//	if (c==0)
//		SOP(a[i]+"");
//	}
//		}