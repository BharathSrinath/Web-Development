package oops;

public class Inheritance_basic_main {

	public static void main(String[] args) {
		
		Inheritance_basic_parent parent_object = new 
				Inheritance_basic_parent();
		parent_object.printParent();
		
		Inheritance_basic_child child_object = new 
				Inheritance_basic_child();
		child_object.printChild();
		child_object.printParent();
		
	}

}
