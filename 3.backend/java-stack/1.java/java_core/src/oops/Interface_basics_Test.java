package oops;

public class Interface_basics_Test {

    public static void main(String[] args) {

        inFlight(new Interface_basics_Jet());
//        When you run the code after passing Jet() to inFlight, Jet.takeOff(), 
//        Jet.fly(), jet.track() and jet.land() overrides the interface methods. 
//        But jet.transition() is not overridden. Rather whatever that is present
//        in the interface (the default class) gets implemented. Because 
//        Interface_basics_Jet() doesn't have the transition method. So it will just
//        implement the method in its parent (interface). 

//        But lets say that you want to override the method but with customisations for
//        for that class. You can simply do so by adding the overridden method with the
//        inbuilt help of IDE. Kindly look into Jet class for continuation.

//        Interface_basics_OrbitEarth.log("Testing " + new Satellite()); 
//        Above line has been commented out after changing the access of log()
//        to private static under Animal.

        orbit(new Interface_basics_Satellite());
    }

    private static void inFlight(Interface_basics_FlightEnabled flier) {

        flier.takeOff();
        flier.transition(Interface_basics_FlightStages.LAUNCH);
//        When transition is called, it returns the next stage like 
//        (GROUNDED, LAUNCH, CRUISE, DATA_COLLECTION)
        flier.fly();
        if (flier instanceof Interface_basics_Trackable tracked) {
            tracked.track();
        }
        flier.land();
    }

    private static void orbit(Interface_basics_OrbitEarth flier) {

        flier.takeOff();
        flier.fly();
        flier.land();
    }
}
