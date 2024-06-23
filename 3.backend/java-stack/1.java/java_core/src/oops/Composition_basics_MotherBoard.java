package oops;

public class Composition_basics_MotherBoard extends Composition_basics_Product{

	private int ramSlots;
    private int cardSlots;
    private String bios;

    public Composition_basics_MotherBoard(String model, String manufacturer) {
        super(model, manufacturer);
    }

    public Composition_basics_MotherBoard(String model, String manufacturer, int ramSlots, int cardSlots,
                       String bios) {
        super(model, manufacturer);
        this.ramSlots = ramSlots;
        this.cardSlots = cardSlots;
        this.bios = bios;
    }

    public void loadProgram(String programName) {
        System.out.println("Program " + programName + " is now loading...");
    }

	public int getRamSlots() {
		return ramSlots;
	}

	public int getCardSlots() {
		return cardSlots;
	}

	public String getBios() {
		return bios;
	}
    
    
}
