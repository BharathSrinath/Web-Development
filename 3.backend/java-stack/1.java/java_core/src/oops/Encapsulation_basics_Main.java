package oops;

public class Encapsulation_basics_Main {

        public static void main(String[] args) {

                Encapsulation_basics_Printer printer = new Encapsulation_basics_Printer(50, false);
                System.out.println("initial page count = " + printer.getPagesPrinted());

                int pagesPrinted = printer.printPages(5);
                System.out.printf("Current Job Pages: %d, Printer Total: %d %n",
                                pagesPrinted, printer.getPagesPrinted());

                pagesPrinted = printer.printPages(10);
                System.out.printf("Current Job Pages: %d, Printer Total: %d %n",
                                pagesPrinted, printer.getPagesPrinted());

        }

}
