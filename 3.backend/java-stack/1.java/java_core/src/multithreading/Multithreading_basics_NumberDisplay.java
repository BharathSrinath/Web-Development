package multithreading;

public class Multithreading_basics_NumberDisplay 
implements Runnable{

	boolean reverse;

    public Multithreading_basics_NumberDisplay
    (boolean reverse) {
        this.reverse = reverse;
    }

    @Override
    public void run() {
        try {
            if (reverse) {
                for (int i = 10; i >= 1; i--) {
                    System.out.println(i);
                    Thread.sleep(500);
                }
            } else {
                for (int i = 1; i <= 10; i++) {
                    System.out.println(i);
                    Thread.sleep(500);
                }
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
