package oops;

public class Composition_basics_ComputerCase extends Composition_basics_Product{

	private String powerSupply;

    public Composition_basics_ComputerCase(String model, String manufacturer) {
        super(model, manufacturer);
    }

    public Composition_basics_ComputerCase
    (String model, String manufacturer, String powerSupply) {
        super(model, manufacturer);
        this.powerSupply = powerSupply;
    }

    public void pressPowerButton() {
        System.out.println("Power button pressed");
    }

	public String getPowerSupply() {
		return powerSupply;
	}
    
    
}
