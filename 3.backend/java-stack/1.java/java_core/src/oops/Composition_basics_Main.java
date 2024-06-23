package oops;

public class Composition_basics_Main {

	public static void main(String[] args) {

		Composition_basics_ComputerCase theCase = new 
				Composition_basics_ComputerCase("2208", "Dell",
                "240");
		Composition_basics_Monitor theMonitor = new 
				Composition_basics_Monitor("27inch Beast", "Acer", 27, "2540 x 1440");
        Composition_basics_MotherBoard theMotherboard = new 
        		Composition_basics_MotherBoard("BJ-200", "Asus",
                4, 6, "v2.44");
        Composition_basics_PersonalComputer thePC = new 
        		Composition_basics_PersonalComputer("2208", "Dell",
                theCase, theMonitor, theMotherboard);

//        thePC.getMonitor().drawPixelAt(10, 10, "red");
//        thePC.getMotherboard().loadProgram("Windows OS");
//        thePC.getComputerCase().pressPowerButton();

        thePC.powerUp();

	}

}
