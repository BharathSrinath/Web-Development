package oops;

public class Abstract_marksPercentage_studentB extends 
Abstract_marksPercentage_abstract{
	private int sub1, sub2, sub3, sub4;

	Abstract_marksPercentage_studentB(int sub1, int sub2, int sub3, int sub4) {
        this.sub1 = sub1;
        this.sub2 = sub2;
        this.sub3 = sub3;
        this.sub4 = sub4;
    }

    @Override
    double getPercentage() {
        return (sub1 + sub2 + sub3 + sub4) / 4.0;
    }
}
