package exception_handling;

public class NegativeAgeException extends Exception {
	private static final long serialVersionUID = 1L;
	public NegativeAgeException(String message) {
        super(message);
    }
}
