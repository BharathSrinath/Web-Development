package oops;

public class Composition_basics_PersonalComputer extends Composition_basics_Product{

	private Composition_basics_ComputerCase computerCase;
    private Composition_basics_Monitor monitor;
    private Composition_basics_MotherBoard motherboard;

    public Composition_basics_PersonalComputer(String model, String manufacturer,
    		Composition_basics_ComputerCase computerCase, 
    		Composition_basics_Monitor monitor,
    		Composition_basics_MotherBoard motherboard) {
        super(model, manufacturer);
        this.computerCase = computerCase;
        this.monitor = monitor;
        this.motherboard = motherboard;
    }

    private void drawLogo() {
        monitor.drawPixelAt(1200, 50, "yellow");
    }

    public void powerUp() {
        computerCase.pressPowerButton();
        drawLogo();
    }

//    public Composition_basics_ComputerCase getComputerCase() {
//        return computerCase;
//    }
//
//    public Composition_basics_Monitor getMonitor() {
//        return monitor;
//    }
//
    public Composition_basics_MotherBoard getMotherboard() {
        return motherboard;
    }
}
