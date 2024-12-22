package oops;

public class Inheritance_animal_main {

	public static void main(String[] args) {
		
		Inheritance_animal_super_class animal = new Inheritance_animal_super_class("Generic Animal", "Huge", 400);
        doAnimalStuff(animal, "slow");

        Inheritance_animal_dog dog = new Inheritance_animal_dog();
        doAnimalStuff(dog, "fast");

        Inheritance_animal_dog yorkie = new Inheritance_animal_dog("Yorkie", 15);
        doAnimalStuff(yorkie, "fast");
        
        Inheritance_animal_dog retriever = new Inheritance_animal_dog("Labrador Retriever", 65,
                "Floppy", "Swimmer");
        doAnimalStuff(retriever, "slow");

        Inheritance_animal_dog wolf = new Inheritance_animal_dog("Wolf", 40);
        doAnimalStuff(wolf, "slow");

        Inheritance_animal_fish goldie = new Inheritance_animal_fish("Goldfish", 0.25, 2, 3);
        doAnimalStuff(goldie, "fast");
    }

    public static void doAnimalStuff(Inheritance_animal_super_class animal, String speed) {

        animal.makeNoise();
        animal.move(speed);
        System.out.println(animal);
        System.out.println("_ _ _ _");
    }

}
