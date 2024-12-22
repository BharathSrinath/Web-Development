package oops;

public class Polymorphism_meal_Items {
	
	private String type;
    private String name;
    private double price;
    private String size = "MEDIUM";

    public Polymorphism_meal_Items(String type, String name, double price) {
        this.type = type.toUpperCase();
        this.name = name.toUpperCase();
        this.price = price;
    }

    public double getBasePrice() {
        return price;
    }

    public double getAdjustedPrice() {
        return switch (size) {
            case "SMALL" -> getBasePrice() - 0.5;
            case "LARGE" -> getBasePrice() + 1;
            default -> getBasePrice();
        };
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getName() {

        if (type.equals("SIDE") || type.equals("DRINK")) {
            return size + " " + name;
        }

        return name;
    }

    public static void printItem(String name, double price) {
        System.out.printf("%20s:%6.2f%n", name, price);
//       %20s Specifies the width of the field
    }

    public void printItem() {
        printItem(getName(), getAdjustedPrice());
    }

}

