package oops;

public class Composition_kitchen_SmartKitchen {

	private Composition_kitchen_CoffeeMaker brewMaster;
    private Composition_kitchen_Refrigerator iceBox;
    private Composition_kitchen_DishWasher dishWasher;

    public Composition_kitchen_SmartKitchen() {
        brewMaster = new Composition_kitchen_CoffeeMaker();
        iceBox = new Composition_kitchen_Refrigerator();
        dishWasher = new Composition_kitchen_DishWasher();
    }

    public Composition_kitchen_CoffeeMaker getBrewMaster() {
        return brewMaster;
    }

    public Composition_kitchen_Refrigerator getIceBox() {
        return iceBox;
    }

    public Composition_kitchen_DishWasher getDishWasher() {
        return dishWasher;
    }

    public void setKitchenState(boolean coffeeFlag, boolean fridgeFlag,
                                boolean dishWasherFlag) {

        brewMaster.setHasWorkToDo(coffeeFlag);
        iceBox.setHasWorkToDo(fridgeFlag);
        dishWasher.setHasWorkToDo(dishWasherFlag);
    }

    public void doKitchenWork() {
        brewMaster.brewCoffee();
        iceBox.orderFood();
        dishWasher.doDishes();
    }
}

// We can use more than one class in a .java file
// But only one class can be public
class Composition_kitchen_CoffeeMaker {

    private boolean hasWorkToDo;

    public void setHasWorkToDo(boolean hasWorkToDo) {
        this.hasWorkToDo = hasWorkToDo;
    }

    public void brewCoffee() {

        if (hasWorkToDo) {
            System.out.println("Brewing Coffee");
            hasWorkToDo = false;
        }
    }
}


class Composition_kitchen_Refrigerator {

    private boolean hasWorkToDo;

    public void setHasWorkToDo(boolean hasWorkToDo) {
        this.hasWorkToDo = hasWorkToDo;
    }

    public void orderFood() {

        if (hasWorkToDo) {
            System.out.println("Ordering Food");
            hasWorkToDo = false;
        }
    }
}

class Composition_kitchen_DishWasher {

    private boolean hasWorkToDo;

    public void setHasWorkToDo(boolean hasWorkToDo) {
        this.hasWorkToDo = hasWorkToDo;
    }

    public void doDishes() {

        if (hasWorkToDo) {
            System.out.println("Washing Dishes");
            hasWorkToDo = false;
        }
    }
}