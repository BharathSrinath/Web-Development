package generics.util;

import generics.model.Student;

import java.util.ArrayList;
import java.util.List;

public class QueryList <T extends Student & QueryItem> {
//	Specifying multiple upper-bounds.
//	Any type that uses this class must be a student or its sub-types and must implement the
//	QueryItem interface.
//	Put it simply, whatever the classes that are mentioned and their sub-types only can the
//	class called QueryList. If it is an interface, that type that uses this  class should 
//	have implemented the interface too.
	// 	We have tested with by creating a 'record'. Check out the main class.
//	Irrespective of the class or interface, you use the 'extends' keyword.
//	In the event of extending class and interfaces, classes must be first type listed.

    private List<T> items;

    public QueryList(List<T> items) {
        this.items = items;
    }

//    A static, generic method
    public static <S extends QueryItem> List<S> getMatches(List<S> items,
                                                           String field, String value) {

        List<S> matches = new ArrayList<>();
        for (var item : items) {
            if (item.matchFieldValue(field, value)) {
                matches.add(item);
            }
        }
        return matches;
    }

//    Normal method
    public List<T> getMatches(String field, String value) {

        List<T> matches = new ArrayList<>();
        for (var item : items) {
            if (item.matchFieldValue(field, value)) {
                matches.add(item);
            }
        }
        return matches;
    }
}
