package oops;

import java.util.Scanner;

public class Polymorphism_movies_Main {

	public static void main(String[] args) {

//      Movie theMovie = Movie.getMovie("Science", "Star Wars");
//      theMovie.watchMovie();

      Scanner s = new Scanner(System.in);
      while (true) {
          System.out.print("Enter Type (A for Adventure, C for Comedy, " +
                  "S for Science Fiction, or Q to quit): ");
          String type = s.nextLine();
          if ("Qq".contains(type)) {
              break;
          }
          System.out.print("Enter Movie Title: ");
          String title = s.nextLine();
//          We are not creating an object here. Because getMovie is a static method.
//          Hence we can directly call that. We are storing the result in a variable
//          which is of type "Polymorphism_movies_Movie". Because switch case returns
//          an object in our code.
          Polymorphism_movies_Movie movie = 
        		  Polymorphism_movies_Movie.getMovie(type, title);
          movie.watchMovie();
      }
      s.close();
	}

}
