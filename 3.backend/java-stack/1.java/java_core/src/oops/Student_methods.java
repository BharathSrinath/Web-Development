package oops;

import java.util.Scanner;

public class Student_methods {
	
	int[] marks;
	
	int total_marks () {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter the number of subjects: ");
		int sub = input.nextInt();
		marks = new int[sub];
		
		System.out.print("Enter the students marks: ");
		int total = 0;
		for (int i = 0; i < marks.length; i++) {
			marks[i] = input.nextInt();
			total += marks[i];
		}
		
		input.close();
		return total;
	}
	
	float average_marks (int total) {
		float average = (float) total/marks.length;
		return average;
	}
}
