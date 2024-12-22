package oops;

public class Student {

	public static void main(String[] args) {
		
		Student_methods total_and_avg = new Student_methods();
		int total = total_and_avg.total_marks();
		System.out.print("Total marks secured by the student is: "+total);
		float average= total_and_avg.average_marks(total);
		System.out.print("\nAverage is: "+average);

	}

}
