package oops;

public class Inheritance_animal_super_class {

    protected String type;
    private String size;
    private double weight;

    public Inheritance_animal_super_class() {

    }

    public Inheritance_animal_super_class(String type, String size, double weight) {
        this.type = type;
        this.size = size;
        this.weight = weight;
    }

    @Override
	public String toString() {
		return "Inheritance_animal_super_class [type=" + type + ", size=" + size + ", weight=" + weight + "]";
	}

    public void move(String speed) {
        System.out.println(type + " moves " + speed);
    }

    public void makeNoise() {
        System.out.println(type + " makes some kind of noise");
    }

	

}
