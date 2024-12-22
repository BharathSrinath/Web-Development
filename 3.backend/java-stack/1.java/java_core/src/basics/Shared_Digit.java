package basics;

import java.util.Scanner;

public class Shared_Digit {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
        System.out.print("Enter a number1: ");
        int a = input.nextInt();
        System.out.print("Enter a number2: ");
        int b = input.nextInt();
        
        input.close();
        
        hasSharedDigit(a,b);

	}
	
	public static boolean hasSharedDigit(int a, int b){
		if (a <= 10 || a >= 99 || b <= 10 || b >= 99){
            return false;
        }
        int[] arrayA = splitAndArrayCreation(a);
        int[] arrayB = splitAndArrayCreation(b);
        
        for (int i = 0; i < arrayA.length; i++){
            for (int j = 0; j < arrayB.length; j++){
                if (arrayA[i] == arrayB[j]){
                	System.out.println("They have a shared digit: "+arrayA[i]);
                    return true;
                }
            }
        }
        return false;
    }

	public static int[] splitAndArrayCreation(int number){
        int divisor = 1;
        int array_size = 0;
        while(number/divisor > 0){
            divisor *= 10;
            array_size++;
        }
        divisor /= 10;
        int remainder = 0;
        int[] array = new int[array_size];
        for (int i = 0; i < array_size; i++){
            remainder = number % divisor;
            array[i] = remainder;
            number /= 10;
        }
        
        return array;
    }

}
