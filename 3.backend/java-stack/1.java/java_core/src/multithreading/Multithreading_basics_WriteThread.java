package multithreading;

import java.io.FileOutputStream;
import java.io.IOException;

public class Multithreading_basics_WriteThread extends Thread{

	String fileName;
	String data;
	
	public Multithreading_basics_WriteThread(String fileName, 
			String data) {
		this.fileName = fileName;
		this.data = data;
	}

	@Override
	public void run() {
        try {
        	FileOutputStream fos = new FileOutputStream(fileName);
			byte[] result = data.getBytes();
			fos.write(result);
            fos.close();
            System.out.println("File writing Successful!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
