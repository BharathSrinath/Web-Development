package oops;

public class Abstract_marksPercentage_main {

	public static void main(String[] args) {

		Abstract_marksPercentage_studentA studentA = new Abstract_marksPercentage_studentA(97, 99, 95);
		Abstract_marksPercentage_studentB studentB = new Abstract_marksPercentage_studentB(95, 97, 99, 100);

        System.out.println("Percentage of marks for Student A: " + studentA.getPercentage() + "%");
        System.out.println("Percentage of marks for Student B: " + studentB.getPercentage() + "%");

	}

}
