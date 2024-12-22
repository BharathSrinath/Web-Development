package collections;

import java.util.Scanner;
import java.util.TreeMap;

public class Collections_Map_TreeMap_basic {

	public static void main(String[] args) {
		
		TreeMap<String, String> tm = new TreeMap<>();
        Scanner input = new Scanner(System.in);
        tm.put("India", "Delhi");
        tm.put("USA", "Washington");
        tm.put("SriLanka", "Colombo");
        tm.put("Russia", "Moscow");

        System.out.print("Enter a country name: ");
        String country = input.nextLine();

        if (tm.containsKey(country)) {
            String capital = tm.get(country);
            System.out.println("Capital of " + country + ": " + capital);
        } else {
            System.out.println("Country not found in the list.");
        }

        input.close();
	}

}
