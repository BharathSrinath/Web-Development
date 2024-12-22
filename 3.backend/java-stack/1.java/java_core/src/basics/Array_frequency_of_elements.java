package basics;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Array_frequency_of_elements {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the size of the array: ");
		int size= input.nextInt();
		
		int[] n = new int[size];
		System.out.println("Enter the elements of the array:");
		
		for (int i = 0; i < size; i++) {
            n[i] = input.nextInt();
        }
		input.close(); 
		
		int frequency = 0;
		boolean[] checked = new boolean[size];
		//	default value for boolean in an array is initialized to false
		for (int j = 0; j < size; j++) {
			if(!checked[j]) {
				frequency = 1;
				for (int k = j+1; k < size; k++) {
					if (n[j] == n[k]) {
						frequency++;
						checked[k] = true;
					}
				}
			checked[j] = true;
			System.out.println("Frequency of the element "+n[j]+ " is "+frequency);
			}
		}
		
		System.out.println();
//		Using hashMap
		HashMap<Integer, Integer> map = new HashMap<>();
		for (int num : n) {
			if(map.containsKey(num)) {
				map.put(num, map.get(num)+1);
			} else {
				map.put(num,1);
			}
		}
		for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
			System.out.println("Frequency of the element "+entry.getKey()+ " "
					+ "is "+entry.getValue());
		}

	}

}
// IMPORTANT NOTE:
// Question for this program - Find the frequency of the ELEMENTS
// Elements is the key word here
// Even when you have values that are same in your array, they are not 
// considered as the same element. 
// An element is specific to an index. Index is unique. 
// To understand this, we have to know the difference between element, value and index.
	// Example: int[] a = {1,2,3,1,2,4,5,6,5} - Consider that it is under a for-loop
	// Here, i - index, 1,2,3,4,etc. - value and a[i] - element
// So when the question is about element, you have to write the code to find from 
//a[0] to a[n] irrespective of their values being same.
//	To achieve this, 
	// 1. Remove the booleans and its related conditions (if). 
	// 2. Start the frequency from 0.
	// 3. Initialize j = 0 for inner for-loop
	// 4. Move the SOP to out of the inner for-loop.


