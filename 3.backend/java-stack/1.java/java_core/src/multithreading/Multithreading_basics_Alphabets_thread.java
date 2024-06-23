package multithreading;

public class Multithreading_basics_Alphabets_thread extends Thread{
	
	@Override
	public void run() {
        for(char c = 'a'; c <= 'j'; c++) {
            System.out.println(c);
        }
    }
}
