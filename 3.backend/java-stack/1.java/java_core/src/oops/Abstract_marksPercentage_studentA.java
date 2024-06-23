package oops;

public class Abstract_marksPercentage_studentA extends 
Abstract_marksPercentage_abstract {
	
	private int sub1, sub2, sub3;

	Abstract_marksPercentage_studentA(int sub1, int sub2, int sub3) {
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
    }

    @Override
    double getPercentage() {
        return (sub1 + sub2 + sub3) / 3.0;
    }
}
