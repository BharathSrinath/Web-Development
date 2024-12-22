package multithreading;

public class Multithreading_basics_MultiplicationTable 
implements Runnable{

	int number;

    public Multithreading_basics_MultiplicationTable 
    (int number) {
        this.number = number;
    }

    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(number+" x "+i+" = "
        +number*i);
        }
    }
    
}
