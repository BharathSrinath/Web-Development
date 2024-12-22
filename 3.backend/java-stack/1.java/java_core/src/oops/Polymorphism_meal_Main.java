package oops;

public class Polymorphism_meal_Main {

	public static void main(String[] args) {

//      Polymorphism_meal_Items coke = new Polymorphism_meal_Items("drink", "coke", 1.50);
//      coke.printItem();
//      coke.setSize("LARGE");
//      coke.printItem();
//
//      Polymorphism_meal_Items avocado = new Polymorphism_meal_Items("Topping", "avocado", 1.50);
//      avocado.printItem();
//
//      Polymorphism_meal_Burger burger = new Polymorphism_meal_Burger("regular", 4.00);
//      burger.addToppings("BACON", "CHEESE", "MAYO");
//      burger.printItem();

      Polymorphism_meal_Meal regularMeal = new Polymorphism_meal_Meal();
      regularMeal.addBurgerToppings("BACON", "CHEESE", "MAYO");
      regularMeal.setDrinkSize("LARGE");
      regularMeal.printItemizedList();

      Polymorphism_meal_Meal secondMeal = new Polymorphism_meal_Meal("turkey", "7-up",
              "chilli");
      secondMeal.addBurgerToppings("LETTUCE", "CHEESE", "MAYO");
      secondMeal.setDrinkSize("SMALL");
      secondMeal.printItemizedList();

	  Polymorphism_meal_Meal deluxeMeal = new Polymorphism_meal_Meal("deluxe", "7-up",
              "chilli");
      deluxeMeal.addBurgerToppings("AVOCADO", "BACON", "LETTUCE",
              "CHEESE", "MAYO");
      deluxeMeal.setDrinkSize("SMALL");
      deluxeMeal.printItemizedList();

		
	}
}

// About the project:

// Introduction:
	// Bill runs a fast food hamburger restaurant, and sells hamburger meals. His meal orders 
	// are composed of three items, the hamburger, the drink, and the side item. Your application 
	// lets Bill select the type of burger, and some of the additional items, or extras, that 
	// can be added to the burger, as well as the actual pricing.

// Classes:
// Meal class:
	// This should be composed of exactly one burger, one drink, and one side item. 
	// The most common meal order should be created without any arguments, like a regular burger, 
	// a small coke, and fries, for example. 
	// You should be able to create other meal orders, by specifying different burger, drinks, 
	// and side items.

// Drink and side item class: 
	// The drink should have at least a type, size and 
	// price, and the  price of the drink should change for each size.
	// The side item needs at least a type and price. 

// Burger class:
	// Every hamburger should have a burger type, a base price, and up to a maximum of three extra toppings. 
	// The constructor should include only the burger type and price.
	// Extra Toppings on a burger need to be added somehow, and priced according to their type.

// Deluxe burger class: 
	// Create a deluxe burger meal, with a deluxe burger, that has a set price, 
	// so that any additional toppings do not change the price.
	// The deluxe burger should have room for an additional two toppings.

// Main class:
	// Create a default meal, that uses the no arguments constructor.
	// Create a meal with a burger, and the drink and side item of your choice, with up to 3 extra toppings. 
	// Create a meal with a deluxe burger, where all items, drink, side item and toppings up to 5 extra toppings, 
	// are included in burger price.
	// For each meal order, you'll want to perform these functions:
		// Add some additional toppings to the burger. Change the size of the drink.
		// Print the itemized list. This should include the price of the burger, any extra toppings, the drink price 
		// based on size, and the side item price.
		// Print the total due amount for the meal.
