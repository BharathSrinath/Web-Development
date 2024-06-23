package oops;

public class Polymorphism_meal_Burger extends Polymorphism_meal_Items{

	private Polymorphism_meal_Items extra1;
    private Polymorphism_meal_Items extra2;
    private Polymorphism_meal_Items extra3;

    public Polymorphism_meal_Burger(String name, double price) {
        super("Burger", name, price);
    }

    @Override
    public String getName() {
        return super.getName() + " BURGER";
    }

    @Override
    public double getAdjustedPrice() {
        return getBasePrice() +
                ((extra1 == null) ? 0 : extra1.getAdjustedPrice()) +
                ((extra2 == null) ? 0 : extra2.getAdjustedPrice()) +
                ((extra3 == null) ? 0 : extra3.getAdjustedPrice());
    }

    public double getExtraPrice(String toppingName) {

        return switch (toppingName.toUpperCase()) {
            case "AVOCADO", "CHEESE" -> 1.0;
            case "BACON", "HAM", "SALAMI" -> 1.5;
            default -> 0.0;
        };
    }

    public void addToppings(String extra1, String extra2, String extra3) {

        this.extra1 = new Polymorphism_meal_Items("TOPPING", extra1,
                getExtraPrice(extra1));
        this.extra2 = new Polymorphism_meal_Items("TOPPING", extra2,
                getExtraPrice(extra2));
        this.extra3 = new Polymorphism_meal_Items("TOPPING", extra3,
                getExtraPrice(extra3));
    }

    public void printItemizedList() {

        printItem("BASE BURGER", getBasePrice());
        if (extra1 != null) {
            extra1.printItem();
        }
        if (extra2 != null) {
            extra2.printItem();
        }
        if (extra3 != null) {
            extra3.printItem();
        }
    }

    @Override
    public void printItem() {
        printItemizedList();
        System.out.println("-".repeat(30));
        super.printItem();
    }
}

