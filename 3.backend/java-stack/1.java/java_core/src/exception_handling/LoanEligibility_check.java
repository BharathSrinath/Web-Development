package exception_handling;

public class LoanEligibility_check {
    public void checkEligibility(String location, int age)
            throws InvalidLocationException,
            InvalidAgeException {
        if (!(location.equalsIgnoreCase("Chennai") ||
                location.equalsIgnoreCase("Mumbai") ||
                location.equalsIgnoreCase("Delhi") ||
                location.equalsIgnoreCase("Kolkata"))) {
            throw new InvalidLocationException("Invalid location: "
                    + location);
        }
        if (age < 23) {
            throw new InvalidAgeException("Invalid age: " + age);
        }
        System.out.println("Congratulations! "
                + "You are eligible for the loan.");
    }
}
