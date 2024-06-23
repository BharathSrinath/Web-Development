package basics;

public class Positive_or_Negative {

    public static void main(String[] args) {

        int n = 10;

        String result = (n > 0) ? (n + " is a positive integer") : ((n == 0) ? 
        		(n + " is neither positive nor negative") : (n + " is a negative integer"));

        System.out.print(result);
    }
}
