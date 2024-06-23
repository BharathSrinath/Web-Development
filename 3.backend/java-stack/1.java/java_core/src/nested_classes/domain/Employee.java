package nested_classes.domain;

import java.util.Comparator;

public class Employee {
	int b = 0;

//	Initially the below class was separate. This class's purpose is to provide a compare method
//	for sorting. But yearStarted is private field of Employee class which cannot be accessed by 
//	the EmployeeComparator. There are two as we know. One is through the getter method. Another
//	is to make field public or package-private. But that defeats the very purpose of encapsulation.
//	So this where we can simply create the class EmployeeComparator within Employee itself.
//	As you have read the use case for nested classes, EmployeeComparator doesn't need the access
//	of instance members of the enclosing class.
    public static class EmployeeComparator <T extends Employee>
            implements Comparator<Employee> {

// Except compare(), all the new fields and constructors are added later.
// So what does the new fields do? Just a new feature. Now when you don't pass any values during
// instantiation, sortType will be "name". If you specify a value like yearsStarted then sortType
// will be yearStarted. 
        private String sortType;

        public EmployeeComparator() {
            this("name");
        }

        public EmployeeComparator(String sortType) {
            this.sortType = sortType;
        }
        
        @Override
        public int compare(Employee o1, Employee o2) {

            if (sortType.equalsIgnoreCase("yearStarted")) {
                return o1.yearStarted - o2.yearStarted;
            }

            return o1.name.compareTo(o2.name);
        }
    }

    private int employeeId;
    private String name;
    private int yearStarted;

    public Employee() {
    }

    public Employee(int employeeId, String name, int yearStarted) {
        this.employeeId = employeeId;
        this.name = name;
        this.yearStarted = yearStarted;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "%d %-8s %d".formatted(employeeId, name, yearStarted);
    }
}

