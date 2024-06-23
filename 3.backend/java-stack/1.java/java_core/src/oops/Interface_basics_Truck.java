package oops;

public class Interface_basics_Truck implements Interface_basics_Trackable {

    @Override
    public void track() {
        System.out.println(getClass().getSimpleName() + "'s coordinates recorded");
    }
}
