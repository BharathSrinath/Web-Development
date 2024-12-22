package oops;

public class Polymorphism_movies_NextMain {

	public static void main(String[] args) {

		// In this main we will deal with casting classes
		Polymorphism_movies_Movie movie = Polymorphism_movies_Movie.getMovie("A", "Jaws");
		movie.watchMovie();

		// Adventure jaws = Movie.getMovie("A", "Jaws");
		// When we run the above code, getMovie() will return a type "Adventure"
		// So this code should be totally valid right? But no. When you uncomment
		// and look at it, you will face a compile time error. Why is that happening?
		// See only after run time we know that the return type is Adventure and hence
		// it can be assigned a variable named jaws with the same return type.
		// But during compile time, java doesn't know the return type of getMovie.
		// So in the below step we are type-casting it to "Adventure".

		Adventure jaws = (Adventure) Polymorphism_movies_Movie.getMovie("A", "Jaws");
		jaws.watchMovie();

		Object comedy = Polymorphism_movies_Movie.getMovie("C", "Airplane");
		// Now we are simply creating a new object called comedy and storing the
		// return value (which is an object by the way) in this variable.
		// Since it is a plain object there should be no issues.
		// But remember this object doesn't have any methods associated
		// with it like "watchMovie()". So we can't write as follows.
		// comedy.watchMovie();
		Comedy comedyMovie = (Comedy) comedy;
		// Now we are type-casting the plain object to "Comedy" and storing
		// it in a variable called "comedyMovie". Since this is typecasted to
		// "Comedy", now the object "comedyMovie" has access to the method
		// watchComedy()
		comedyMovie.watchComedy();

		// 'var' keyword
		// It allows you to declare a local variable without specifying its explicit type, 
		// enabling the compiler to infer the type based on the value that the variable is
		// initialized with.
		var airplane = Polymorphism_movies_Movie.getMovie("C", "Airplane");
		airplane.watchMovie();
		
		var plane = new Comedy("Airplane");
		// This line is much more direct where instance of "Comedy" class is inferred
		// to "plane" variable with the help of 'var'. So here both during the run-time
		// and compile-time, same type is inferred.
		plane.watchComedy();

		// var cannot be used
		// 1. Without initialization
		// 2. When declaring multiple variables in a single statement
		// Example: var a = 1, b = 2; (not allowed)
		// 3. When you declare it with null
		// Example: var a = null; (not allowed)
		// 4. Can be used for local variables inside methods, constructors, or
		// initializer blocks but not for fields, method parameters, or return types
		// public class Example {
		// var instanceVariable = 10; // Error: 'var' is not allowed here
		// void method(var parameter) { // Error: 'var' is not allowed here
		// code...
		// }
		// var method() { // Error: 'var' is not allowed here
		// code...
		// }
		// }

		// Now the question is, is there a way to know the run-time objects name?
		// Actually no. We cannot know them during the compile time. But there are
		// 3 common ways to write logics based on the return type at run-time.

		Object unknownObject = Polymorphism_movies_Movie.getMovie("C", "Airplane");
		// Method 1: instanceOf operator. It returns true/false.
		if (unknownObject instanceof Adventure) {
			Adventure a = (Adventure) unknownObject;
			a.watchAdventure();
			// Method 2: instanceOf with pattern matching
			// This method doesn't require casting. if instanceOf true, the variable will be
			// automatically type-casted
		} else if (unknownObject instanceof ScienceFiction scifi) {
			scifi.watchScienceFiction();
			// Method 3: Simple old method which gets the name of the return type at
			// run-time
		} else if (unknownObject.getClass().getSimpleName() == "Comedy") {
			Comedy c = (Comedy) unknownObject;
			c.watchComedy();
		}
	}
}
