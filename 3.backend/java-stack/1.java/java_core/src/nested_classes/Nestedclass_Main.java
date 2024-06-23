// Static Nested Class:
// They do not have direct access to instance variables/methods of the enclosing class.
	// They can access instance variables/methods of the enclosing class through an instance 
	//of the enclosing class.
// But they can access static variables/methods of the enclosing class, including private ones.
// The enclosing class can access any attributes (including private) of the static nested class.
//To instantiate the static nested class, new outerClassName.innerClassName()
//Use Cases:
	//Often used to group related classes together for better organization.
	//They can be used when the nested class does not need access to instance members of the 
	//enclosing class.

//Inner Classes/Non-static nested classes:
//They have access to the instance variables/methods of the enclosing class without even 
//having access to the instance of the enclosing class.
//To instantiate the inner class, first instantiate the outer class and chain the inner class
//instantiation as new outerClassName().new innerClassName()
//Use Cases:
	//Often used to logically group classes that belong together and are used only in one place.
	//They are used when the nested class needs to access instance members of the enclosing class.

//Local classes:
//They are inner classes/Non-static nested classes defined within a block, typically within a 
//method.
//Since they are used only within the method, they don't have any access modifiers and are
//only accessible when that method is getting executed. 
//Since they are basically an inner class, they have access to all the fields and methods on 
//the enclosing class.
//Instantiation of local class happens within the block/method itself.
//With respect to the local fields under a method, local classes have access to those fields 
//only when they are declared final or effectively final.
	//Effectively final means after assigning the value you have made a change to that.
	//Declared as final means even if you try, you can't make a change to that
	//In our example below String lastName = "Piggy"; is effectively final.

//Note about record, interface and enum type:
//Since JDK 16, we can also create a record, interface and enum type as nested/local.
	//But unlike local classes, these are all implicitly static types and therefore aren't 
	//inner classes. So they are static nested types.
//Use Cases:
	//Helpful when the class is needed only in a limited scope.


//Anonymous Classes:
//They are a type of local class without a name. 
//All the classes that we have looked at so far have been created with class declaration. But 
//anonymous class is never created with a class declaration but its always instantiated as a 
//part of an expression.
//Since JDK8, lambda expressions have replaced them.
//Use Cases: 
	//To instantiate objects with certain modifications without having to create a separate 
	//named class.
	//For implementing interfaces or extending classes with only a few lines of code.
	//For event handling and quick implementation of single-use functionality.

package nested_classes;

import nested_classes.domain.Employee;
import nested_classes.domain.StoreEmployee;

import java.util.ArrayList;
import java.util.List;

public class Nestedclass_Main {

    public static void main(String[] args) {

        List<Employee> employees = new ArrayList<>(List.of(
                new Employee(10001, "Ralph", 2015),
                new Employee(10005, "Carole", 2021),
                new Employee(10022, "Jane", 2013),
                new Employee(13151, "Laura", 2020),
                new Employee(10050, "Jim", 2018) ));

//        Below lines of code were written when EmployeeComparator was a separate class.
//        There is one key take-away here. We haven't specified the type parameter
//        at all. But since we have used var, java can infer the type 'Employee'.
//        var comparator = new EmployeeComparator<>();
//        employees.sort(comparator);

//        Static nested class
        employees.sort(new Employee.EmployeeComparator<>("yearStarted")
                .reversed());

        for (Employee e : employees) {
            System.out.println(e);
        }

        System.out.println("Store Members");

        List<StoreEmployee> storeEmployees = new ArrayList<>(List.of(
                new StoreEmployee(10015, "Meg", 2019,
                        "Target"),
            new StoreEmployee(10515, "Joe", 2021,
                    "Walmart"),
            new StoreEmployee(10105, "Tom", 2020,
                    "Macys"),
            new StoreEmployee(10215, "Marty", 2018,
                    "Walmart"),
            new StoreEmployee(10322, "Bud", 2016,
                    "Target")));

//        Inner class/Non-static nested class
        var comparator = new StoreEmployee().new StoreComparator<>();
        storeEmployees.sort(comparator);

        for (StoreEmployee e : storeEmployees) {
            System.out.println(e);
        }

        System.out.println("With Pig Latin Names");
        addPigLatinName(storeEmployees);
    }

    public static void addPigLatinName(List<? extends StoreEmployee> list) {

        String lastName = "Piggy";
//Local class
        class DecoratedEmployee extends StoreEmployee
                implements Comparable<DecoratedEmployee> {

            private String pigLatinName;
            private Employee originalInstance;

            public DecoratedEmployee(String pigLatinName, Employee originalInstance) {
                this.pigLatinName = pigLatinName + " " + lastName;
                this.originalInstance = originalInstance;
            }

            @Override
            public String toString() {
                return originalInstance.toString() + " " + pigLatinName;
            }

            @Override
            public int compareTo(DecoratedEmployee o) {
                return pigLatinName.compareTo(o.pigLatinName);
            }
        }

        List<DecoratedEmployee> newList = new ArrayList<>(list.size());

//        Logic to add the pigLatinName
        for (var employee : list) {
            String name = employee.getName();
            String pigLatin = name.substring(1) + name.charAt(0) + "ay";
            newList.add(new DecoratedEmployee(pigLatin, employee));
        }

//        Passing null to the sort() means, method uses the natural ordering of the elements 
//        in the list.
//        newList.sort(Comparator.naturalOrder()); It exactly does the same job as below
        newList.sort(null);
        for (var dEmployee : newList) {
            System.out.println(dEmployee.originalInstance.getName() + " "
                    + dEmployee.pigLatinName);
        }
    }

}
