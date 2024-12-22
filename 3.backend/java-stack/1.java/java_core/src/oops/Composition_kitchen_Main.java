package oops;

public class Composition_kitchen_Main {

	public static void main(String[] args) {

		Composition_kitchen_SmartKitchen kitchen = new 
				Composition_kitchen_SmartKitchen();

//      kitchen.getDishWasher().setHasWorkToDo(true);
//      kitchen.getIceBox().setHasWorkToDo(true);
//      kitchen.getBrewMaster().setHasWorkToDo(true);
//
//      kitchen.getDishWasher().doDishes();
//      kitchen.getIceBox().orderFood();
//      kitchen.getBrewMaster().brewCoffee();

      kitchen.setKitchenState(true, false, true);
      kitchen.doKitchenWork();

	}

}
