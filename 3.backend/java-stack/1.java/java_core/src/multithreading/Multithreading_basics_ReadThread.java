package multithreading;

import java.io.FileInputStream;
import java.io.IOException;

public class Multithreading_basics_ReadThread  extends Thread{

	String fileName;
	String data;

	Multithreading_basics_ReadThread(String fileName, 
			String data) {
        this.fileName = fileName;
        this.data = data;
    }

	@Override
    public void run() {
        try {
        	FileInputStream fis = new FileInputStream(fileName);
			byte[] result = fis.readAllBytes();
            data = new String(result);
            fis.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public String getData() {
		return data;
    }
}
