package lambda_expressions;

import java.util.Scanner;

interface OddEven {
    String check(int number);
}
interface LongestString {
    String find(String s1, String s2);
}
interface PassFail {
    String test(int[] marks);
}
public class Lambda_expressions_basics1 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		OddEven oddEven = number -> number % 2 == 0 ? "Even" : "Odd";
        LongestString longestString = (s1, s2) -> s1.length() > s2.length() ? s1 : s2;
        PassFail PassFail = (int[] m) -> (m[0] >= 40 && m[1] >= 40 && m[2] >= 40) ? "Pass" : "Fail";

        System.out.print("Enter a number to check for odd/even: ");
        int n = input.nextInt();
        System.out.println("The number is " + oddEven.check(n)+"\n");
        System.out.println("Enter the words to compare: ");
        System.out.print("First word: ");
        String s1 = input.next();
        System.out.print("Second word: ");
        String s2 = input.next();
        System.out.println("The longest string is: " + longestString.find(s1, s2)+"\n");
        int[] marks = new int[3];
        System.out.println("Enter marks for three subjects: ");
        for (int i = 0; i < 3; i++) {
            marks[i] = input.nextInt();
        }
        System.out.println("Result: " + PassFail.test(marks));
        input.close();
	}

}
