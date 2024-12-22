package oops;

public class Interface_basics_Jet implements 
Interface_basics_FlightEnabled, Interface_basics_Trackable {

    @Override
    public void takeOff() {
        System.out.println(getClass().getSimpleName() + " is taking off");
    }

    @Override
    public void land() {
        System.out.println(getClass().getSimpleName() + " is landing");
    }

    @Override
    public void fly() {
        System.out.println(getClass().getSimpleName() + " is flying");
    }

    @Override
    public void track() {
        System.out.println(getClass().getSimpleName() + "'s coordinates recorded");
    }

//    You see blue and green triangles on the left?
//    blue says that we are implementing and green says that we are overriding
	@Override
	public Interface_basics_FlightStages transition(Interface_basics_FlightStages stage) {
//		return Interface_basics_FlightEnabled.super.transition(stage);
	//		Now this method is auto generated for overriding. But having this method as it is or not
	//		having them will make absolutely no difference. Just like in inheritance we can use the 
	//		super keyword that brings all the properties of the transition method from (parent)interface 
	//		to child(Jet). 
	//		'super' keyword with interface:
			//	Syntax: interfaceName.super.methodName();
			//	Why such a syntax? Because there is a possibility where we can have multiple interfaces 
			//	with default methods that have the same name.
			//	If your class implements an interface and overrides a default method, but you still need 
			//	to call the default method provided by the interface, you use InterfaceName.super.methodName()
		
//	Now lets tweak the code a bit. Now the below 2 lines will give 
		System.out.println(getClass().getSimpleName() + " transitioning");
//		return Interface_basics_FlightStages.CRUISE;
//		Above line is hardcoded which is replaced by below return statement.
        return Interface_basics_FlightEnabled.super.transition(stage);
	}


	
    
    
}
