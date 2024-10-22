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
//Many of Java's classes use FI's in their method signatures which allows us to pass lambdas as
//arguments to them.
//Just like a local and anonymous classes, LE can use the enclosing code's LE or method parameters
//if they are final or effectively final.
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

//        Anonymous class implementing two abstract methods of the interface.
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
        
//        Usage of forEach
        List<String> list = new ArrayList<>(List.of(
                "alpha", "bravo", "charlie", "delta"));

        for (String s : list) {
            System.out.println(s);
        }

        System.out.println("-------");
        list.forEach((myString) -> System.out.println(myString));
//        Specifying the return type is not mandatory
//        forEach(String myString) or forEach(myString) both are right as Java can infer the type

        
        System.out.println("-------");
        String prefix = "nato";
        list.forEach((var myString) -> {
            char first = myString.charAt(0);
            System.out.println(prefix + " " + myString + " means " + first);
        });

//        int result = calculator((var a, var b) -> System.out.println(a + b), 5, 2);
//        int result = calculator((var a, var b) -> return System.out.println(a + b), 5, 2);
//        Both the above statements are wrong. When the block has only one line, we need not use a 
//        return statement. It is implicit. But that one statement should return a value based
//        on the return type of the function that we are overriding. But here SOP is a statement
//        that actually prints a value (not return a value). So whether you use/don't use a 
//        return statement, it is not right. 
        int result = calculator((var a, var b) -> a + b,5, 2);
//        int result = calculator((Integer a, var b) -> a + b, 5, 2);
//        Above statement is wrong because you cannot mix explicit types with var in LE
        var result2 = calculator((a, b) -> a / b, 10.0, 2.5);
//        We know that for generics we don't explicitly mention the return type. I mean that is 
//        why they are called as generics in the first place. Also we know that for LE, parameters
//        type and the return type of the function are obtained through the interface. But when 
//        interface's SAM is generic in nature there is nothing that can be inferred. But even 
//        then Java can infer based on the values we pass. When two integers are added then the 
//        return type is obviously an Integer. This is how Java infers the type.
        var result3 = calculator(
                (a, b) -> a.toUpperCase() + " " + b.toUpperCase(),
                "Ralph", "Kramden");

    }
	
	@FunctionalInterface
	public interface Operation<T> {

	    T operate(T value1, T value2);
	}

//	calculator() takes 3 arguments. First is an interface, 2 and 3 are values.
//	This interface is a FI with SAM which will be over-ridden by the LE that has been passed 
	public static <T> T calculator(Operation<T> function, T value1, T value2) {

        T result = function.operate(value1, value2);
        System.out.println("Result of operation: " + result);
        return result;
    }
}
