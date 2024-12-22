// Goal of these snippets is to understand 
	// 1. Generic classes as reference types in method parameters 
// and local variables (The last method in Team_Main)
	// 2. Generic methods, wildcards and type-erasure
	// 3. Static methods and multiple upper bounds

// In Collections we have learned that, the method that accepts the argument should be
// as generic as possible. Like instead of ArrayList<T>/LinkedList<T>, we simply mention
// the type to be List<T>.So that in future whenever you change AL/LL to something else
// or include new lists that will make use of the same method, the method will simply
// work without making any changes. 
// Now consider the following situation (look at the main code). 
	// List<Student> students = new ArrayList<>();
	// List<LPAStudent> lpaStudents = new ArrayList<>();
	// Here LPAStudent extends Students. 
// Student is passed to the method called printList which accepts List with a type parameter
// <Student>. No issues here. But what happens when you pass the child (LPAStudent) to the 
// same method? After all LPAStudent extends Student right?  Yes. LPAStudent extends Student. 
// That is inheritance. But what is the relationship between AL and List. There is no 
// inheritance happening here. Rather AL is implementing List as List is an interface. 
// So When you look at this relationship between AL<LPAStudent> and List<Student> as a whole, 
// you have to understand that there is no relationship between them. 
// To understand this lets go back to the advantage of generics that we have learned. 
	//	Lets say there is a Class Box<T>{....}
	//	Now i am creating two instances as Box<Intger> and Box<String>
	//	Even though both instances are derived from Box, Box<Integer> and Box<String> 
	//	are completely unrelated types. 
// In the example below where we are initially trying to pass lpaStudents to printList()
// causes a compile-time error because printList() can only accept a type Student and not 
// lpaStudents despite lpaStudents being a subclass for Students. This is because, generics, 
// collections are 'invariant'. 
	// Invariance means that a generic type with one parameter type is considered 
	// completely different from the same generic type with a different parameter type.
// But Classes with polymorphism, arrays (Non-generics) are considered to be covariant where 
// Covariance allows a type to be substituted with its sub-type.

// Look at the below explanation
// Lets say there is a a class named Class Student{....}
// Another class named Class StudentMarks extends Student{.....}
// You can do below with non-generics as they are covariant
	// Class Main{
	// Student objName = new StudentMarks();
	// }
// But in generics this becomes wrong as generics are invariant
	// Class Main{
	// List<Student> list = new ArrayList<StudentLPA>();
	// }

// So what is the concluding part here? Only List sub-types with Student elements can 
// be assigned to this variable 'list' or method argument if it is being passed to a 
// method. "WE CAN'T ASSIGN A 'LIST OF STUDENT' SUB-TYPES TO THIS VARIABLE"
	//	Kindly note the difference between "List sub-types" vs "List of Student sub-types". 
	//	If you could understand that difference, then you understood this concept.

// So any solutions? In these snippets we will try different solutions to understand 
// what seems right for the given situation.
// Methods that work but not recommended and should not be used in any scenarios:
	//	1. Create another method with different name to pass lpaStudents. (It means we are
	//basically duplicating the code).
	//	2. Remove the type parameter of the method argument. That is "raw usage of the class"
	//as done in the last method in Team_Main. (It compromises the type safety)

//Not recommended in our situation but can be useful in others:
	//	1. Make the method a generic method by adding a type parameter after the modifier 
	//(say public) and before the name of the return type (say void). Generic methods can 	
	//be created on any class, not just on generic class.
		//Generic method Declaration: public <T> void print(T item) {....}
			//<T> is a type parameter. It is a placeholder for any type, allowing the method 
			//to accept parameters of different types.
			//T item - Specifies the type of parameter the method will accept, which is 
			//determined by the type parameter T.
		//Generic methods are primarily used for static methods on a generic class. This
		//is because a static method can't use type parameters. Why?
			//See type parameters are associated only with instances. (Think about it. When do 
			//you use the type parameter? When you create an instance right?). So unless static 
			//methods are turned into generic methods, we cannot use them with type parameters.
				//Wrong: public static void printItem(T item) {.....}
				//Right: public static <T> void printItem(T item) {.....}
		//A generic method can also be used on a non-generic class to enforce type rules on a 
		//a specific method.
		//A generic method's type parameter is completely separate from a generic class's type
		//parameter. If GC's TP is <T> and GM's TP is also <T>. But no relation between them.
		//Upper bound can be mentioned for a generic method's type parameter too. Look at the 
		//last commented method. <T> extends Student - Now you can pass Student list or sub-type
		//(lpaStudents list in this case) to that method.

//Note:  Before going for the recommended methods, lets understand the difference between 
//type-parameter and type-arguments.
	//A type parameter is a placeholder for a type that is specified when you define a generic 
	//class, interface, or method. Think of it as a blank label on a box. You decide what to 
	//write on the label later.
			//Example: public class Box<T>
	//A type argument is the actual type that you provide when you create an instance of a generic 
	//class, interface, or call a generic method. This is what you write on the blank label.
			//Example: Box<String> stringBox = new Box<>();	Here String the type-argument

//Recommended method in this scenario: 
// Wildcard: 
	//Represented by question mark (?) and it means the type is unknown
	//It can be used only in a type argument and not the in the type parameter declaration.
	//They can't be used in the instantiation of the generic class.
	//They can be unbounded or upper/lower-bounded
	//Since the type is unknown, there are limitations with wild card

package generics;

import generics.model.LPAStudent;
import generics.model.Student;
import generics.util.QueryItem;
import generics.util.QueryList;

import java.util.ArrayList;
import java.util.List;

record Employee(String name) implements QueryItem {

    @Override
    public boolean matchFieldValue(String fieldName, String value) {
        return false;
    }
}

public class Students_Main {

    public static void main(String[] args) {

        int studentCount = 10;
        List<Student> students = new ArrayList<>();
        for (int i = 0; i < studentCount; i++) {
            students.add(new Student());
        }
        students.add(new LPAStudent());
//        printList(students);
        printMoreLists(students);

        List<LPAStudent> lpaStudents = new ArrayList<>();
        for (int i = 0; i < studentCount; i++) {
            lpaStudents.add(new LPAStudent());
        }
//        printList(lpaStudents);
        printMoreLists(lpaStudents);

//        This is just to show how overloaded methods can't work with generics (type-erasure)
        testList(new ArrayList<String>(List.of("Able", "Barry", "Charlie")));
        testList(new ArrayList<Integer>(List.of(1, 2, 3)));

//        Now look here. We haven't specified the type argument on either side of the 
//        assignment operator. But still java compiler knows because we are passing 
//        lpaStudents to the constructor. That is enough. So this is another way.
        var queryList = new QueryList<>(lpaStudents);
//        You can't do the following by the way
//        List<LPAStudent> queryList = new QueryList<>();
        // You may wonder this is exactly what you did with AL. But AL/LL is built-in generic
        // classes. But that is not the case with user-defined. For user-defined, type parameter
        // need to explicitly specified with one exception. If you are passing the list with 
        // type same as type parameter and use 'var' then you won't need it as var can infer the
        // type.(That is what we have done)
        var matches = queryList.getMatches(
                "Course", "Python");
        printMoreLists(matches);

        var students2021 =
                QueryList.getMatches(students, "YearStarted", "2021");
        printMoreLists(students2021);

//        QueryList<Employee> employeeList = new QueryList<>();
// The above code doesn't compile because, for any type (Employee in this case) to use the 
// QueryList class, it should be Student or sub-type of student (lpaStudents) and implement 
// the QueryItems interface.
// It does the second but not the first. (Additional info: Technically a record cannot extend 
// a class and implement an interface at the same time. 
    }

    public static void printMoreLists(List<? extends Student> students) {
//This is solution that we ended up with for our scenario. But now lets say you want to add
//something to the list within this method. That wont be possible. Because, compiler doesn't
// which list we are talking about. In this case it could be Student or lpaStduent.

//    	 Student last = students.get(students.size()-1);
//    	 students.set(0,last);
    	 
        for (var student : students) {
            System.out.println(student);
        }
        System.out.println();
    }
    
//  public static void printMoreLists(List<? super Student> students) {
//
//      for (var student : students) {
//          System.out.println(student.getYearStarted() + ": " + student);
//      }
//      System.out.println();
//  }
// Above method doesn't compile because, super means list can contain elements of type 
// Student or any of its super classes. This means the list might contain elements of a 
// type that is a superclass of Student, which might not have the getYearStarted() method
// (in our case it is the 'Object' class itself). Because of this, the compiler cannot 
// guarantee that every element in the list will have the getYearStarted() method, resulting 
// in a compilation error.
    
//  public static void printMoreLists(List<? super Student> students) {
//
//      for (var student : students) {
//          System.out.println(student);
//      }
//      System.out.println();
//  }
// In this method, we have removed the getYearStarted(). But still this method wont compile.
// This is because of the reason. super means we can pass list that is either Student or its 
// super types. lpaStudent being sub-types, it can't be passed. Using extends will compile both 
// of the above two methods.

//    public static void testList(List<String> list) {
//
//        for (var element : list) {
//            System.out.println("String: " + element.toUpperCase());
//        }
//    }
//
//    public static void testList(List<Integer> list) {
//
//        for (var element : list) {
//            System.out.println("Integer: " + element.floatValue());
//        }
//    }
    
// Above two methods should be perfectly valid overloaded methods right? But it isn't. 
// Due to type erasure both List<String> and List<Integer> are resolved to a List of 
// object making their signature same. Hence it will give us a compile-time error.
// Below is the way to handle these situations.
    
    public static void testList(List<?> list) {

        for (var element : list) {
            if (element instanceof String s) {
                System.out.println("String: " + s.toUpperCase());
            } else if (element instanceof Integer i) {
                System.out.println("Integer: " + i.floatValue());
            }
        }
    }
    
//    public static <T extends Student> void printList(List<T> students) {
//
//        for (var student : students) {
//            System.out.println(student.getYearStarted() + ": " + student);
//        }
//        System.out.println();
//    }
}

//Type Erasure
//Type erasure is a mechanism used by Java to implement generics, allowing generic types 
//and methods to operate while maintaining backward compatibility with older versions of 
//Java that did not support generics. This is done by removing generic type information 
//at compile time, effectively replacing generic types with their non-generic equivalents.
	//	1. Type Parameters are Removed at Runtime:When you write a generic class or method, 
	//the type parameters (like <T>) are used during compilation to ensure type safety. After 
	//compilation, these type parameters are removed (erased), and the compiled byte-code contains 
	//non-generic types.
	// 2. Replacing Type Parameters: Type parameters are replaced with their bounds or Object if 
	//no bounds are specified. 
//This is a concept which you just need to know conceptually that such a thing is happening at 
//the background. One real case scenario where this knowledge help you is with overloaded methods.
//Look at the testList method to understand.