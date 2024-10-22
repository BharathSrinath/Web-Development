package oops;

public class Inheritance_animal_dog extends Inheritance_animal_super_class {

    private String earShape;
    private String tailShape;

    public Inheritance_animal_dog() {
        super("Mutt", "Big", 50);
    }

    public Inheritance_animal_dog(String type, double weight) {
        this(type, weight, "Perky", "Curled");
    }

    public Inheritance_animal_dog(String type, double weight, String earShape, String tailShape) {
        super(type, weight <  15 ? "small" : (weight < 35 ? "medium" : "large"),
                weight);
        this.earShape = earShape;
        this.tailShape = tailShape;
    }

    

    public void makeNoise() {

        if (type == "Wolf") {
            System.out.print("Ow Wooooo! ");
        }
        bark();
        System.out.println();
    }

	@Override
	public String toString() {
		return "Inheritance_animal_dog [earShape=" + earShape + ", tailShape=" + tailShape + "]" + super.toString();
	}

	@Override
    public void move(String speed) {
        super.move(speed);
        if (speed == "slow") {
            walk();
            wagTail();
        } else {
            run();
            bark();
        }
        System.out.println();
    }

    private void bark() {
        System.out.print("Woof! ");
    }

    private void run() {
        System.out.print("Dog Running ");
    }

    private void walk() {
        System.out.print("Dog Walking ");
    }

    private void wagTail() {
        System.out.print("Tail Wagging ");
	    }
	}

