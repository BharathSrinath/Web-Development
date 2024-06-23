package oops;

public class Composition_basics_Product {

	 private String model;
	    private String manufacturer;
	    private int width;
	    private int height;
	    private int depth;

	    public Composition_basics_Product(String model, String manufacturer) {
	        this.model = model;
	        this.manufacturer = manufacturer;
	    }

		public String getModel() {
			return model;
		}

		public String getManufacturer() {
			return manufacturer;
		}

		public int getWidth() {
			return width;
		}

		public int getHeight() {
			return height;
		}

		public int getDepth() {
			return depth;
		}
}
