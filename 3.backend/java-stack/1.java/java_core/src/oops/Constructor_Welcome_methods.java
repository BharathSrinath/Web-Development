package oops;

public class Constructor_Welcome_methods {

	public Constructor_Welcome_methods (String name) {
        System.out.println("Welcome, " + name + "!");
	}
	
	public Constructor_Welcome_methods () {
		 System.out.println("Welcome, Guest!");
	}
	
	public void profession(String name) {
		System.out.print(name+" is a  Full Stack Developer");
	}
	
	public void profession() {
		System.out.print("Kindly decide your profession!");
	}
}
