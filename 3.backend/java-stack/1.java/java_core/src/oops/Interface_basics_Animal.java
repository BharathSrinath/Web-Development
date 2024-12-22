package oops;

enum Interface_basics_FlightStages implements Interface_basics_Trackable {
	
	GROUNDED, LAUNCH, CRUISE, DATA_COLLECTION;

    @Override
    public void track() {

        if (this != GROUNDED) {
            System.out.println("Monitoring " + this);
        }
    }
    
    public Interface_basics_FlightStages getNextStage() {
// We are seeing this for the first time. But is very common to use the methods within 
// an enum or class to return instances of the same type (Interface_basics_FlightStages). 
    	Interface_basics_FlightStages[] allStages = values();
        return allStages[(ordinal() + 1) % allStages.length];
//        The logic is to move to the next stage and next stage and the next, etc.
//        See getNextStage is being called on an enum constant (LAUNCH) for the time
//        from from transition default method to which the enum constant has been 
//        passed form the TEST class while calling the transition default method.
//        So ordinal() gets the LAUNCH index (1). 2 % 4 will return will index 2 (CRUISE). 
//        Then 
    }
// Since values and ordinal are static method on enum, you can simply call the method 
// within an 'enum' without using enum's name.methodName(). If you are using in another 
// class, then you have to use the enum's name.methodName().
}

record Interface_basics_DragonFly(String name, String type) implements Interface_basics_FlightEnabled {

    @Override
    public void takeOff() {

    }

    @Override
    public void land() {

    }

    @Override
    public void fly() {

    }
}

class Interface_basics_Satellite implements Interface_basics_OrbitEarth {

	Interface_basics_FlightStages stage = Interface_basics_FlightStages.GROUNDED;
	 
    public void achieveOrbit() {
    	transition("Orbit achieved!");
    }

    @Override
    public void takeOff() {
    	transition("Taking Off");
    }

    @Override
    public void land() {
    	transition("Landing");
    }

    @Override
    public void fly() {
    	achieveOrbit();
        transition("Data Collection while Orbiting");
    }
    
    public void transition(String description) {
// This method oveloads the transition() in interface.
        System.out.println(description);
        stage = transition(stage);
        stage.track();
    }
    
}

interface Interface_basics_OrbitEarth extends Interface_basics_FlightEnabled {

    void achieveOrbit();
    
    private static void log(String description) {
//    	Declaring it as private means, only the concrete methods within the 
//    	interface can access this method.
//    	Declaring it as static means, the method performs operations that 
//    	are not instance-specific but are related to the class as a whole.

        var today = new java.util.Date();
//        You can write new Date(). But then you to have import the util package. 
        System.out.println(today + ": " + description);
    }

    private void logStage(Interface_basics_FlightStages stage, String description) {

        description = stage + ": " + description;
        log(description);
    }

    @Override
    default Interface_basics_FlightStages transition(Interface_basics_FlightStages stage) {

    	Interface_basics_FlightStages nextStage = Interface_basics_FlightEnabled.super.transition(stage);
        logStage(stage, "Beginning Transition to " + nextStage);
        return nextStage;
    }
}

interface Interface_basics_FlightEnabled {

    double MILES_TO_KM = 1.60934;
    double KM_TO_MILES = 0.621371;

    void takeOff();
    void land();
    void fly();

//    You see there is a fundamental issue with interfaces. When you want to add a new method here
//    what will happen? Can you imagine? None of the classes that is implementing FlightEnabled 
//    will work now. Why? Because the new method needs to be implemented by the implementing classes 
//    right? So what can we do now? We can go to each and every class and add those methods. Or we 
//    can declare the new method as extension methods/default methods (since JDK8). It is a concrete 
//    method, means it has a code block. 
    
    default Interface_basics_FlightStages transition(Interface_basics_FlightStages stage) {
//      System.out.println("transition not implemented on " + getClass().getName());
//      return null;
//      See the above message is pretty common practice when you want the class to overridden by the 
//      sub classes that implements the interface. Because default method being concrete method, there
//      is no rule to implement them in the sub-classes. Since the compiler wont be compelling you to 
//      implement the classes, above message is a good way to remind yourself(as a developer), if you
//      want to override this particular method.

    	Interface_basics_FlightStages nextStage = stage.getNextStage();
    	System.out.println("Transitioning from " + stage + " to " + nextStage);
    	return nextStage;
  }
}

interface Interface_basics_Trackable {

    void track();
}


public abstract class Interface_basics_Animal {

    public abstract void move();
}
