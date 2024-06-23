package generics;

import java.util.ArrayList;
import java.util.List;

record Affiliation(String name, String type, String countryCode) {

    @Override
    public String toString() {
        return name + " (" + type + " in " + countryCode + ")";
    }
}

public class Team<T extends Player, S> {
// You might have learned what T extends Player mean. But now you have to understand 
// why we use this. T can be any type right? But we don't want that to be any type. So we 
// are restricting them to be Player or subclasses of Player. 
// 'extends' keyword doesn't have the same meaning as we have used them in the class.
//	This declaration is called 'upper bound'
//	Player can be an interface/class. 
//	When you don't use extend and restrict, the upper bound will be java.lang.object
//	That is T could be anything. 
//	This gives us a significant problem. Player interface has name() which is implemented 
//	by 3 classes. To access this method, T can't be anything (like String, Integer, etc.)
//	Now those types may not have the name() on them (in fact they don't have such a method). 
//	That is we can't try to access a method that is not on java.lang.object as that is the 
//	implicit upper bound. Now adding bounds will help the compiler to check for whether 
//	name() is available within bounds. In our case Player interface has a name().
//	Most importantly now when you create an object, type parameter can't be anything like
//	String or Integer. It can be only Player or Player's subclasses.
    private String teamName;
    private List<T> teamMembers = new ArrayList<>();
    private int totalWins = 0;
    private int totalLosses = 0;
    private int totalTies = 0;
    private S affiliation;

    public Team(String teamName) {
        this.teamName = teamName;
    }

    public Team(String teamName, S affiliation) {
        this.teamName = teamName;
        this.affiliation = affiliation;
    }

    public void addTeamMember(T t) {

        if (!teamMembers.contains(t)) {
            teamMembers.add(t);
        }
    }

    public void listTeamMembers() {

        System.out.print(teamName + " Roster:");
        System.out.println((affiliation == null ? "" : " AFFILIATION: "+ affiliation));
        for (T t : teamMembers) {
            System.out.println(t.name());
        }
    }

    public int ranking() {
        return (totalLosses * 2) + totalTies + 1;
    }

    public String setScore(int ourScore, int theirScore) {

        String message = "lost to";
        if (ourScore > theirScore) {
            totalWins++;
            message = "beat";
        } else if (ourScore == theirScore) {
            totalTies++;
            message = "tied";
        } else {
            totalLosses++;
        }

        return message;

    }

    @Override
    public String toString() {
        return teamName + " (Ranked "  + ranking() + ")";
    }
}
