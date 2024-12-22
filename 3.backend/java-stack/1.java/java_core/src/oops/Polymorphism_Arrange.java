package oops;

import java.util.Scanner;

public class Polymorphism_Arrange {
	
	public String[] sort(String[] s, int size) {
        for (int i = 0; i < size; i++) {
            for (int j = i + 1; j < size; j++) {
                if (s[i].compareTo(s[j]) > 0) {
                    String temp = s[i];
                    s[i] = s[j];
                    s[j] = temp;
                }
            }
        }
        return s;
    }

    public int[] sort(int[] a, int size) {
        for (int i = 0; i < size; i++) {
            for (int j = i + 1; j < size; j++) {
                if (a[i] > a[j]) {
                    int temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        return a;
    }

	public static void main(String[] args) {

		Polymorphism_Arrange arrange = new Polymorphism_Arrange();

		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter the size of the String array: ");
		int stringArraySize = input.nextInt();
		System.out.println("Enter the strings: ");
		String[] stringArray = new String[stringArraySize];
		for (int i = 0; i < stringArraySize ; i++) {
			stringArray[i] = input.next();
		}
		 
        String[] sortedStringArray = arrange.sort(stringArray, stringArraySize);
        System.out.print("Sorted String Array: ");
        for (int i = 0; i < stringArraySize; i++) {
            System.out.print(sortedStringArray[i]+" ");
        }
        System.out.println();

        System.out.print("Enter the size of the Integer array: ");
		int intArraySize = input.nextInt();
		System.out.println("Enter the numbers: ");
		int[] intArray = new int[intArraySize];
		for (int i = 0; i < intArraySize; i++) {
			intArray[i] = input.nextInt();
		}
		
        int[] sortedIntArray = arrange.sort(intArray, intArraySize);
        System.out.print("Sorted Integer Array: ");
        for (int i = 0; i < intArraySize; i++) {
            System.out.print(sortedIntArray[i]+" ");
        }
        System.out.println();
        
        input.close();

	}

}
