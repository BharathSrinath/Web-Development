package multithreading;

public class Multithreading_basics_Main {

	public static void main(String[] args) {
		 
		Multithreading_basics_Number_thread number = new 
				Multithreading_basics_Number_thread();
		Multithreading_basics_Alphabets_thread alphabet = new 
				Multithreading_basics_Alphabets_thread();

        number.start();
        alphabet.start();
        
        String readFileName = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\"
        		+ "web-development\\3.backend\\java-stack\\1.java\\javabasics"
        		+ "\\src\\multithreading\\read_file.txt";
        String data = null;
        Multithreading_basics_ReadThread read = new 
        		Multithreading_basics_ReadThread(readFileName, data);
        read.start();
        try {
            read.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        data = read.getData();
        
        String writeFileName = "C:\\Users\\Bharath Srinath\\Documents\\GitHub\\"
        		+ "web-development\\3.backend\\java-stack\\1.java\\javabasics"
        		+ "\\src\\multithreading\\write_file.txt";
        Multithreading_basics_WriteThread write = new 
        		Multithreading_basics_WriteThread(writeFileName, data);
        write.start();
        
        Thread thread1 = new Thread(new Multithreading_basics_MultiplicationTable(5));
        Thread thread2 = new Thread(new Multithreading_basics_MultiplicationTable(7));

        thread1.start();
        thread2.start();

	}

}
