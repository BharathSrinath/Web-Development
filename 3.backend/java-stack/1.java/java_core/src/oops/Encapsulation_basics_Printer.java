package oops;

public class Encapsulation_basics_Printer {

    private int tonerLevel;
    private int pagesPrinted;
    private boolean duplex;

    public Encapsulation_basics_Printer(int tonerLevel, boolean duplex) {
        this.pagesPrinted = 0;
        this.tonerLevel = (tonerLevel >= 0 && tonerLevel <= 100) ? tonerLevel : -1;
        this.duplex = duplex;
    }

    public int addToner(int tonerAmount) {

        int tempAmount = tonerAmount + tonerLevel;
        if (tempAmount > 100 || tempAmount < 0) {
            return -1;
        }
        tonerLevel += tonerAmount;
        return tonerLevel;
    }

    public int printPages(int pages) {

        int jobPages = (duplex) ? (pages / 2) + (pages % 2) : pages;
        pagesPrinted += jobPages;
        return jobPages;
    }

    public int getPagesPrinted() {
        return pagesPrinted;
    }
}

// How the code implements encapsulation?
    // If we do not use private access specifiers and directly access the fields (with default or public visibility), the internal state of the object can be modified directly from anywhere in the code.
    // This leads to a lack of control over how the variable is used or changed, which can result in unpredictable behavior or bugs.
        // If the tonerLevel is public, any code can modify it directly, even setting it to an invalid value like -10 (which makes no sense for a toner level).
    // But when we use the private keyword along with getter and setter methods, we restrict direct access to the field and provide controlled access through the methods. This ensures that the variable is accessed or modified in a safe, controlled manner.
        // private int tonerLevel; prevents direct modification of tonerLevel from outside the class.
        // The getter method (getTonerLevel) is used to safely access the value of tonerLevel.
        // The setter method (setTonerLevel) is used to control modifications, ensuring that only valid values (0 to 100) are allowed.