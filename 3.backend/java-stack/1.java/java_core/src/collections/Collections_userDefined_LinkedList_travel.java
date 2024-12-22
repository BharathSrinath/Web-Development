package collections;

import java.util.LinkedList;
import java.util.Scanner;

record Place(String name, int distance) {

    @Override
    public String toString() {
        return String.format("%s (%d)", name, distance);
    }
}

public class Collections_userDefined_LinkedList_travel {

    public static void main(String[] args) {

        LinkedList<Place> placesToVisit = new LinkedList<>();

        Place adelaide = new Place("Adelaide", 1374);
        addPlace(placesToVisit, adelaide);
        addPlace(placesToVisit, new Place("adelaide", 1374));
        addPlace(placesToVisit, new Place("Brisbane", 917));
        addPlace(placesToVisit, new Place("Perth", 3923));
        addPlace(placesToVisit, new Place("Alice Springs", 2771));
        addPlace(placesToVisit, new Place("Darwin", 3972));
        addPlace(placesToVisit, new Place("Melbourne", 877));

        placesToVisit.addFirst(new Place("Sydney", 0));
        System.out.println(placesToVisit);

        var iterator = placesToVisit.listIterator();
        Scanner scanner = new Scanner(System.in);
        boolean quitLoop = false;
        boolean forward = true;

        printMenu();

        while (!quitLoop) {
            // This apps core functionality is that whenever a user presses "F", we 
        	// need to iterate to the next element and "B" means, we need to iterate to the previous element.
            // With the variable "forward" we are determining where exactly the cursor is (beginning/end).
            // If we are at the beginning, can't go anymore backwards or if they are at the end, 
        	// can't go any more forwards. 
            if (!iterator.hasPrevious()) {
                System.out.println("Originating : " + iterator.next());
                forward = true;
            }
            if (!iterator.hasNext()) {
                System.out.println("Final : " + iterator.previous());
                forward = false;
            }
            System.out.print("Enter Value: ");
            String menuItem = scanner.nextLine().toUpperCase().substring(0, 1);

            switch (menuItem) {
                case "F":
                    System.out.println("User wants to go forward");
                    // Now a tricky situation. You know how the cursor works right? When you 
                    // want to print the next element by moving forward from second element 
                    // to third element, third element will be printed and the cursor will 
                    // be placed between third and fourth element. Now when you go back, 
                    // third element will be printed again and the cursor will be placed 
                    // between third and second element. So whenever we are reversing the 
                    // direction, we need to offset for this repetition.   
                    if (!forward) {           // Reversing Direction
                        forward = true;
                        if (iterator.hasNext()) {
                            iterator.next();  // Adjust position forward
                        }
                    }

                    if (iterator.hasNext()) {
                        System.out.println(iterator.next());
                    }

                    break;

                case "B":
                    System.out.println("User wants to go backwards");
                    if (forward) {           // Reversing Direction
                        forward = false;
                        if (iterator.hasPrevious()) {
                            iterator.previous();  // Adjust position backwards
                        }
                    }
                    
                    if (iterator.hasPrevious()) {
                        System.out.println(iterator.previous());
                    }
                    break;

                case "M":
                    printMenu();
                    break;

                case "L":
                    System.out.println(placesToVisit);
                    break;

                default:
                	scanner.close();
                	quitLoop = true;
                    break;
            }
        }

    }

    private static void addPlace(LinkedList<Place> list, Place place) {
    	// Rather than using built in add() directly, we are creating our own 
    	// method which could check for duplicates and adds in the ascending order.
        if (list.contains(place)) {
            // contains() doesn't ignore the case. So we write another method.
            System.out.println("Found duplicate: " + place);
            return;
        }

        for (Place p : list) {
            if (p.name().equalsIgnoreCase(place.name())) {
                // Now the above method becomes unneccesary. 
                System.out.println("Found duplicate: " + place);
                return;
            }
        }

        // To sort them where closest place to be at first (ascending order)
        int matchedIndex = 0;
        for (var listPlace : list) {
            if (place.distance() < listPlace.distance()) {
                list.add(matchedIndex, place);
                return;
            }
        // Here it would have been efficient if you had used a ListIterator as 
        // it would directly add to the index. As you know using index based 
        // operation in LL is not efficient. 

            matchedIndex++;
        }

        list.add(place);
    }

    private static void printMenu() {

        System.out.println("""
                Available actions (select word or letter):
                (F)orward
                (B)ackwards
                (L)ist Places
                (M)enu
                (Q)uit""");
    }
}

// Detailed explanation on how the "forward" variable works here: Lets consider this scenario. 
// We have 5 elements and the user has pressed "F" two times. Now the cursor will be between 
// 2nd and 3rd element. 
    // Now user presses "B": forward is true, so the if condition is satisfied. 
		// Now we set forward as false and move the cursor moves between first and second element. 
		// Next set of lines will print the previous element. 
    // Now user presses "F": forward is false, after inverting, the if condition is satisfied. 
		// Now we set forward as true and move the cursor moves between second and third element. 
		// Next set of lines will print the next element. 