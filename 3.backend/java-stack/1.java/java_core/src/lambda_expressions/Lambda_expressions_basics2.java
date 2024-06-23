package lambda_expressions;

import java.util.Scanner;

interface WelcomeMessage {
    void display();
}

interface SumNumbers {
    void sum(int a, int b);
}

interface MaxNumber {
    int findMax(int a, int b);
}

public class Lambda_expressions_basics2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        WelcomeMessage welcomeMessage = () -> System.out.println("Welcome Bharath!");
        SumNumbers sumDigits = (a, b) -> System.out.println("Sum of "+a+" and "+b+" is "+(a + b));
        MaxNumber maxDigits = (a, b) -> a > b ? a : b;

        welcomeMessage.display();

        System.out.print("Enter first number to sum: ");
        int num1 = input.nextInt();
        System.out.print("Enter second number to sum: ");
        int num2 = input.nextInt();
        sumDigits.sum(num1, num2);

        System.out.print("Enter first number to find max: ");
        int num3 = input.nextInt();
        System.out.print("Enter second number to find max: ");
        int num4 = input.nextInt();
        int max = maxDigits.findMax(num3, num4);
        System.out.println("The maximum of " + num3 + " and " + num4 + " is " + max);

        input.close();
    }
}
