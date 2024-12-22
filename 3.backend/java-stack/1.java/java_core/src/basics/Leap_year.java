package basics;

public class Leap_year {

    public static void main(String[] args) {

        int year = 1900;

        String result = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? 
        		(year + " is a leap year") : (year + " is NOT a leap year");

        System.out.print(result);
    }
}
