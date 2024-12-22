package collections;

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Comparator;

public class Collections_userDefined_ArrayList_grocery {
		
	private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        boolean flag = true;
        ArrayList<String> groceries = new ArrayList<>();
        while (flag) {
            printActions();
            switch (Integer.parseInt(scanner.nextLine())) {
//            Expecting the user to enter 1 or 2. But if they enter anything else,
//            default action will kick-in.
                case 1 -> addItems(groceries);
                case 2 -> removeItems(groceries);
                default -> flag = false;
            }
            groceries.sort(Comparator.naturalOrder());
            System.out.println(groceries);
        }
    }

    private static void addItems(ArrayList<String> groceries) {

        System.out.println("Add item(s) [separate items by comma]:");
        String[] items = scanner.nextLine().split(",");
//        Asking the user to enter comma separated items. Now this will be split into
//        individual words using "split" and store them as string of arrays.

//	      groceries.addAll(List.of(items));
//		  Above line was the first attempt where we try to pass the list to "List.of"
//        to convert them to list and then addAll to the AL. But then we have few issues
//        with that method while sorting where trailing space can mess with sorting order.
        for (String i: items) {
            String trimmed = i.trim();
//            trim the trailing spaces
            if (groceries.indexOf(trimmed) < 0) {
//            	This condition is to avoid the duplicates as per the task requirement.
//            	indexOf "returns" -1 if the item is not found.
//            	You can also use "contains" - !groceries.contains(trimmed) which returns
//            	a boolean value.
                groceries.add(trimmed);
            }
        }
    }

    private static void removeItems(ArrayList<String> groceries) {

        System.out.println("Remove item(s) [separate items by comma]:");
        String[] items = scanner.nextLine().split(",");

        for (String i: items) {
            String trimmed = i.trim();
            groceries.remove(trimmed);
        }
    }
    private static void printActions() {

        String textBlock = """
                Available actions:
                                
                0 - to shutdown
                                
                1 - to add item(s) to list (comma delimited list)
                                
                2 - to remove any items (comma delimited list)
                                
                Enter a number for which action you want to do:""";
        System.out.print(textBlock + " ");
    }
}
