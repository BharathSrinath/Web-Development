//Lambda Expressions
//Consider the following
//new Comparator<Person>() {
//            @Override
//            public int compare(Person o1, Person o2) {
//                return o1.lastName().compareTo(o2.lastName());    }     };   
//        vs
//(o1, o2) -> o1.lastName().compareTo(o2.lastName())
//Both codes mean the same thing. Now the question is how does java infer what to do with very
//little information that the LE provides? I mean with anonymous class, it is obvious that we are
//overriding the compare method of the Comparator and an int value is returned. We haven't got 
//any of those information with lambda expressions. Then how does java knows what is the method 
//name or return type? 

//Lambda expressions in Java are a shorthand way of writing anonymous classes that implement a 
//functional interface. A functional interface is an interface with exactly one abstract method. 
//Java infers the type and context of the lambda expression based on the target type, which is 
//the type of the variable or parameter that the lambda is being assigned to or used with.
	//	people.sort((o1, o2) -> o1.lastName().compareTo(o2.lastName()));
	//	First you have to know about the syntax of sort() on a List (we have read only sort()
	// 	on Arrays). 
		//	List.sort(Comparator<? super E>)
		//	Here E is record/class and wildcard will be their instances (Hope you remember that
		//	method in Comparator compares different instances/objects of the same class)
	//	Here E is Person and hence the target type is Comparator<? super Person>
	//	Then java checks for the number of abstract methods(Functional Interface Identification). 
	//	Comparator by default just has SAM which is compareTo(). This makes the interface 
	//	qualified as Functional Interface. 
	//	Then comes the Method Signature Inference. Compare() has two parameters whose type is
	//	inferred by the Parameter Type of interface (Person in our case). 
// Summary:
	//	Identification of the Functional Interface
	//	Matching the Lambda Expression to the SAM
	//	LE provides the implementation for its SAM

package lambda_expressions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class Lambda_expressions_intro {
	
	 record Person (String firstName, String lastName) {

	        @Override
	        public String toString() {
	            return firstName + " " + lastName;
	        }
	    }

	public static void main(String[] args) {
		
		List<Person> people = new ArrayList<>(Arrays.asList(
                new Person("Lucy", "Van Pelt"),
                new Person("Sally", "Brown"),
                new Person("Linus", "Van Pelt"),
                new Person("Peppermint", "Patty"),
                new Person("Charlie", "Brown")));

// Using anonymous class that implements the Comparator interface 
//        var comparatorLastName = new Comparator<Person>() {
//
//            @Override
//            public int compare(Person o1, Person o2) {
//                return o1.lastName().compareTo(o2.lastName());
//            }
//        };

//		Implementing the same code as above with LE
        people.sort((o1, o2) -> o1.lastName().compareTo(o2.lastName()));
        System.out.println(people);

// Now lets try to implement LE with an interface that has two abstract methods
// When you write the annotation @FunctionalInterface as below compiler throws an error. 
// Because the class that needs to implement the EnhancedComparator needs to provide definition 
// for two abstract methods - ComapareTo() and secondLevel(). Hence it doesn't qualify to be a FI.        
     
//        @FunctionalInterface
        interface EnhancedComparator<T> extends Comparator<T> {
            int secondLevel(T o1, T o2);
        }

//        Anonymous class implementing two asbtract of the interface methods.
        var comparatorMixed = new EnhancedComparator<Person>() {

            @Override
            public int compare(Person o1, Person o2) {
                int result = o1.lastName().compareTo(o2.lastName());
                return (result == 0 ? secondLevel(o1, o2) : result);
            }

            @Override
            public int secondLevel(Person o1, Person o2) {
                return o1.firstName().compareTo(o2.firstName());
            }
        };

//        So here LE is not possible
        people.sort(comparatorMixed);
        System.out.println(people);

    }
}
