package oops;

public class Composition_basics_Monitor extends Composition_basics_Product{

	private int size;
    private String resolution;

    public Composition_basics_Monitor(String model, String manufacturer) {
        super(model, manufacturer);
    }

    public Composition_basics_Monitor
    (String model, String manufacturer, int size, String resolution) {
        super(model, manufacturer);
        this.size = size;
        this.resolution = resolution;
    }

    public void drawPixelAt(int x, int y, String color) {
        System.out.println(String.format(
                "Drawing pixel at %d,%d in color %s ", x, y, color));
    }

	public int getSize() {
		return size;
	}

	public String getResolution() {
		return resolution;
	}
    
    
}
