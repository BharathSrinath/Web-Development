package basics;

public class Total_and_Average {

	public static void main(String[] args) {
		
		int no_of_subjects = 3;
		int subject1 = 98;
		float subject2 = 99.5F;
		int subject3 = 100;
		
		float total = subject1 + subject2 + subject3;
		float average = total/no_of_subjects;
		
		System.out.println("Total number of marks: "+total);
		System.out.print("Average of "+no_of_subjects+" is:" +average);

	}

}
