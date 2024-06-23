package oops;

public class Polymorphism_box_Areas {
	
	public double calculateArea(double length, double breadth) {
        return length * breadth;
    }

    public double calculateArea(double side) {
        return side * side;
    }
}
