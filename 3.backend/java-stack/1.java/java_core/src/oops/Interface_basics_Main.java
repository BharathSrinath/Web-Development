package oops;

import java.util.LinkedList;
import java.util.List;

public class Interface_basics_Main {

    public static void main(String[] args) {

        Interface_basics_Bird bird = new Interface_basics_Bird();
        Interface_basics_Animal animal = bird;
        Interface_basics_FlightEnabled flier = bird;
//        Interface_basics_Trackable tracked = bird;

        animal.move();
//        flier.move();
//        tracked.move();
//        Above two statements will throw a compiler error because there is no move() on 
//        Interface_basics_FlightEnabled and Interface_basics_Trackable. You might wonder 
//        that bird has a move(). Then flier.move() should call the move() in bird right? 
//        Even though bird has been assigned to flier and tracked, during compile time, 
//        compiler considers only the declared type (whatever that is on the left of 
//        the variable). Hence it will not allow us to compile in the first place. "bird"
//        object is a run-time type.
        
//        All the below lines are valid and considered best practice rather using bird.takeOff(), 
//        bird.fly(), etc. Why? This is why we use abstraction/interface in the first place. 
				//        flier.takeOff();
				//        flier.fly();
				//        tracked.track();
				//        flier.land();
//		  The reason why we use the interface type has been written in your notes with example.

        inFlight(flier);
        inFlight(new Interface_basics_Jet());
        Interface_basics_Trackable truck = new Interface_basics_Truck();
        truck.track();

        double kmsTraveled = 100;
        double milesTraveled = kmsTraveled * Interface_basics_FlightEnabled.KM_TO_MILES;
        System.out.printf("The truck traveled %.2f km or %.2f miles%n",
                kmsTraveled, milesTraveled);

        LinkedList<Interface_basics_FlightEnabled> fliers = new LinkedList<>();
        fliers.add(bird);

        List<Interface_basics_FlightEnabled> betterFliers = new LinkedList<>();
        betterFliers.add(bird);
//        Whether you declare it as LinkedList/ArrayList or simply List, everything 
//        gets passed successfully without any issues. Because we have made the receiving
//        parameter type to be List. All the classes like AL, LL, stack or vector implements List.
//        You get what we are trying to achieve? When the receiving parameter is very specific,
//        then we can pass only that type. But List is an interface that is implemented by the 
//        above mentioned classes. In future too, if you want to add stack or a vector, you need
//        not change the below methods. Just create a vector/stack and pass it to the below methods.

        triggerFliers(fliers);
        flyFliers(fliers);
        landFliers(fliers);

        triggerFliers(betterFliers);
        flyFliers(betterFliers);
        landFliers(betterFliers);
    }

    private static void inFlight(Interface_basics_FlightEnabled flier) {

        flier.takeOff();
        flier.fly();
        if (flier instanceof Interface_basics_Trackable tracked) {
            tracked.track();
        }
        flier.land();
    }

    private static void triggerFliers(List<Interface_basics_FlightEnabled> fliers) {

        for (var flier : fliers) {
            flier.takeOff();
        }
    }

    private static void flyFliers(List<Interface_basics_FlightEnabled> fliers) {

        for (var flier : fliers) {
            flier.fly();
        }
    }

    private static void landFliers(List<Interface_basics_FlightEnabled> fliers) {

        for (var flier : fliers) {
            flier.land();
        }
    }
}
