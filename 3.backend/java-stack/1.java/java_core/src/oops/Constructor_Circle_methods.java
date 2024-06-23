package oops;

public class Constructor_Circle_methods {
	
	int r;
	
	public Constructor_Circle_methods (int r) {
		this.r = r;
	}
	
	float area () {
		float A = 3.14F * r * r;
		return A;
	}
	
	float perimeter () {
		float P = 2 * 3.14F * r;
		return P;
	}

}
