package oops;

public class Polymorphism_meal_DeluxeBurger extends Polymorphism_meal_Burger{
	
	Polymorphism_meal_Items deluxe1;
	Polymorphism_meal_Items deluxe2;

    public Polymorphism_meal_DeluxeBurger(String name, double price) {
        super(name, price);
    }

    public void addToppings(String extra1, String extra2, String extra3,
                            String extra4, String extra5) {
        super.addToppings(extra1, extra2, extra3);
        deluxe1 = new Polymorphism_meal_Items("TOPPING", extra4, 0);
        deluxe2 = new Polymorphism_meal_Items("TOPPING", extra5, 0);
    }

    @Override
    public void printItemizedList() {
        super.printItemizedList();
        if (deluxe1 != null) {
            deluxe1.printItem();
        }
        if (deluxe2 != null) {
            deluxe2.printItem();
        }
    }

    @Override
    public double getExtraPrice(String toppingName) {
        return 0;
    }
}

