package exception_handling;

public class EB_calculator {
	
	private static final double LT100 = 0.40;
    private static final double LT300 = 0.50;
    private static final double GT300 = 0.60;
    private static final double minCharge = 50.00;
    private static final double maxCharge = 250.00;
    private static final double addCharge = 0.15;
    
    public static double calculateCharges(int units) throws InvalidUnitException {
    	
    	if (units < 0) {
            throw new InvalidUnitException("Units consumed cannot be negative");
        }
        double total = 0;
        if (units <= 100) {
            total = units * LT100;
        } else if (units <= 300) {
            total = 100 * LT100 + (units - 100) * LT300;
        } else {
            total = 100 * LT100 + 200 * LT300 + (units - 300) * GT300;
        }
        if (total < minCharge) {
            total = minCharge;
        } else if (total > maxCharge) {
            total += total * addCharge; 
        }
        return total;
    }
}
