package oops;

public class Polymorphism_movies_Movie {
	private String title;

    public Polymorphism_movies_Movie(String title) {
        this.title = title;
    }

    public void watchMovie() {

        String instanceType = this.getClass().getSimpleName();
        System.out.println(title + " is a " + instanceType + " film");
    }

//    Here this method is called the factory method. Why? It creates 
//    objects without specifying the exact class of the object that will be created.
//    It provides an interface for creating objects but allows subclasses to 
//    alter the type of objects that will be created (Adventure/Comedy/Sci-Fi). 
//    The factory method pattern is particularly useful when the exact type 
//    of the object cannot be determined until runtime.
    public static Polymorphism_movies_Movie getMovie(String type, String title) {

        return switch (type.toUpperCase().charAt(0)) {
            case 'A' -> new Adventure(title);
            case 'C' -> new Comedy(title);
            case 'S' -> new ScienceFiction(title);
            default -> new Polymorphism_movies_Movie(title);
        };
    }
}

class Adventure extends Polymorphism_movies_Movie {

    public Adventure(String title) {
        super(title);
    }

    @Override
    public void watchMovie() {
        super.watchMovie();
        System.out.printf(".. %s%n".repeat(3),
                "Pleasant Scene",
                "Scary Music",
                "Something Bad Happens");
    }
    
    public void watchAdventure() {
        System.out.println("Watching an Adventure!");
    }
}

class Comedy extends Polymorphism_movies_Movie {

    public Comedy(String title) {
        super(title);
    }

    @Override
    public void watchMovie() {
        super.watchMovie();
        System.out.printf(".. %s%n".repeat(3),
                "Something funny happens",
                "Something even funnier happens",
                "Happy Ending");
    }
    
    public void watchComedy() {
        System.out.println("Watching a Comedy!");
    }
}

class ScienceFiction extends Polymorphism_movies_Movie {

    public ScienceFiction(String title) {
        super(title);
    }

    @Override
    public void watchMovie() {
        super.watchMovie();
        System.out.printf(".. %s%n".repeat(3),
                "Bad Aliens do Bad Stuff",
                "Space Guys Chase Aliens",
                "Planet Blows Up");
    }
    
    public void watchScienceFiction() {
        System.out.println("Watching a Science Fiction Thriller!");
    }
}