package nested_classes;

import nested_classes.domain.Employee;
import nested_classes.domain.EmployeeComparator;
import nested_classes.domain.StoreEmployee;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class RunMethods {

    public static void main(String[] args) {

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

        var c0 = new EmployeeComparator<StoreEmployee>(); 
        //Above is a separate EmployeeComaprator
        var c1 = new Employee.EmployeeComparator<StoreEmployee>();
        var c2 = new StoreEmployee().new StoreComparator<StoreEmployee>();

        // Using local class. Mind you this class is under main method.
        class NameSort<T> implements Comparator<StoreEmployee> {

            @Override
            public int compare(StoreEmployee o1, StoreEmployee o2) {
                return o1.getName().compareTo(o2.getName());
            }
        }

        var c3 = new NameSort<StoreEmployee>();

        // Using anonymous class
//Lets break down the code. Initial declaration is as follows.
//        var c4 = new Comparator<StoreEmployee>() {};
//        This looks like as if you are trying to instantiate an interface (which is not possible
//        by the way). But since you have an empty method body, the meaning changes.
//        What this means is, an anonymous class with no name is implementing an interface
//        named Comparator. Now below code actually implements the interface with definition.
//        So an anonymous class will not have name or use the keyword implements/extends while 
//        being instantiated. 
        //var c4 = new Employee{....}
        //Here employee is not the name of the anonymous class, rather it is the name of its 
        //super class. It means the anonymous class extends Employee but we wont be using the 
        //keyword extends.
        var c4 = new Comparator<StoreEmployee>() {
            @Override
            public int compare(StoreEmployee o1, StoreEmployee o2) {
                return o1.getName().compareTo(o2.getName());
            }
        };
//        Kindly remember the semi-colon at the end of the curly brace as this is an expression 
//        and not a declaration.

        sortIt(storeEmployees, c0);
        sortIt(storeEmployees, c1);
        sortIt(storeEmployees, c2);
        sortIt(storeEmployees, c3);
        sortIt(storeEmployees, c4);
//        sortIt(storeEmployees, new Comparator<StoreEmployee>() {
//            @Override
//            public int compare(StoreEmployee o1, StoreEmployee o2) {
//                return o1.getName().compareTo(o2.getName());
//            }
//        }); You could do this too. Rather than assigning it to a variable and then passing to 
//        a function, you can directly write the code like this (Like we do it in JS)
//        You can call this as on-the-fly anonymous class that is being as a method argument.
        sortIt(storeEmployees, (o1, o2) -> o1.getName().compareTo(o2.getName()));
//        The same above code has been replaced with a lambda expression. 
    }

    public static <T> void sortIt(List<T> list,
                                  Comparator<? super T> comparator) {

        System.out.println("Sorting with Comparator: " + comparator.toString());
        list.sort(comparator);
        for (var employee : list) {
            System.out.println(employee);
        }
    }

}
