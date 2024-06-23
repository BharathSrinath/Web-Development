package oops;

public class Polymorphism_meal_Meal {

	private Polymorphism_meal_Burger burger;
    private Polymorphism_meal_Items drink;
    private Polymorphism_meal_Items side;

    public Polymorphism_meal_Meal() {
        this("regular", "coke", "fries");
    }

    public Polymorphism_meal_Meal(String burgerType, String drinkType, String sideType) {

        if (burgerType.equalsIgnoreCase("deluxe")) {
            this.burger = new Polymorphism_meal_DeluxeBurger(burgerType, 8.5);
        } else {
            this.burger = new Polymorphism_meal_Burger(burgerType, 4.0);
        }
        this.drink = new Polymorphism_meal_Items("drink", drinkType, 1.00);
        this.side = new Polymorphism_meal_Items("side", sideType, 1.50);
    }

    public double getTotalPrice() {

        if (burger instanceof Polymorphism_meal_DeluxeBurger) {
            return burger.getAdjustedPrice();
        }

        return side.getAdjustedPrice() + drink.getAdjustedPrice() +
                burger.getAdjustedPrice();
    }

    public void printItemizedList() {

        burger.printItem();
        if (burger instanceof Polymorphism_meal_DeluxeBurger) {
        	Polymorphism_meal_Items.printItem(drink.getName(), 0);
        	Polymorphism_meal_Items.printItem(side.getName(), 0);
        } else {
            drink.printItem();
            side.printItem();
        }
        System.out.println("-".repeat(30));
        Polymorphism_meal_Items.printItem("TOTAL PRICE", getTotalPrice());
    }

    public void addBurgerToppings(String extra1, String extra2, String extra3) {
        burger.addToppings(extra1, extra2, extra3);
    }

    public void addBurgerToppings(String extra1, String extra2, String extra3,
                                  String extra4, String extra5) {
        if (burger instanceof Polymorphism_meal_DeluxeBurger db) {
            db.addToppings(extra1, extra2, extra3, extra4, extra5);
        } else {
            burger.addToppings(extra1, extra2, extra3);
        }
    }
    public void setDrinkSize(String size) {
        drink.setSize(size);
    }

}
