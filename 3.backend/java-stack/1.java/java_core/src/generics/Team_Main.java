// Generics:
// We have been using generics since Lists. It is just that we weren't aware of it.
// Generics use angle brackets (< >) to define type parameters.
// See for class, we can only pass values with data-types that has been declared in 
// the fields right? Our constructors, getters and setters are based on the fields.
// Once the fields are declared with a data-type, they can't be changed. That is with a 
// non-generic class, the types of values we can pass to the constructors are fixed. Hence, 
// the class is designed to work with those specific data types only, and this cannot 
// be changed at runtime. But this is where the super power of generics come into picture. 
// While creating a class, you can place a placeholder along side the class declaration 
// in angular brackets which represents the data-type that will passed during instantiation.
	//	Class Box<T, U>{....}
	//	Box<String, Integer> myBox = new Box<>();
	//	Here, T and U represents String and Integer respectively. 
// As you can see the major advantage is you need not create separate classes for accepting
// different types. You can simply use the same class and pass different data-types with
// different instances. 
// Convention for naming them: T, S, U, etc.

package generics;

// In this code, we have first created 'BaseballTeam' specifically and then went onto create a much 
// generic class called 'SportsTeam' and then went onto create a even more a generic class called 'Team'.
interface Player {

    String name();
}
record BaseballPlayer(String name, String position) implements Player {}
record FootballPlayer(String name, String position) implements Player {}
record VolleyballPlayer(String name, String position) implements Player {}
// records are not implementing the name() of the player interface because 
// they are implicitly implemented as name being one of the parameters.
public class Team_Main {

    public static void main(String[] args) {

        var philly = new Affiliation("city", "Philadelphia, PA",
            "US");

// Just creating BaseBallTeam and SportsTeam which doesn't use any type Parameter for 
// Class declaration. That is their class is non-Generic
        BaseballTeam phillies1 = new BaseballTeam("Philadelphia Phillies");
        BaseballTeam astros1 = new BaseballTeam("Houston Astros");
        scoreResult(phillies1, 3, astros1, 5);

        SportsTeam phillies2 = new SportsTeam("Philadelphia Phillies");
        SportsTeam astros2 = new SportsTeam("Houston Astros");
        scoreResult(phillies2, 3, astros2, 5);
// Team class is Generic where its type parameters are T and S and T extends Player
// So during object (below), we are passing BaseBallPlayer and Affiliation as the types. 
// T extends Player means, T can be a Player or Player's subclasses which are 
// BaseballPlayer or FootballPlayer or VolleyballPlayer as Player is implemented by them.
// Raw of use Generics: That is not specifying the type while instantiation. It means you can 
// pass any type of data. Even though java allows this, it is extremely unsafe. Just know that 
// such a thing exists.
        Team<BaseballPlayer, Affiliation> phillies =
                new Team<>("Philadelphia Phillies", philly);
        Team<BaseballPlayer, Affiliation> astros = new Team<>("Houston Astros");
        scoreResult(phillies, 3, astros, 5);
// teamMembers of BaseballTeam can only be 'BaseballPlayer' (look at the List's parameter type)
// teamMembers of SportsTeam can be 'Player' (look at the List's parameter type)

// We are creating players who can be added to the team
        var harper = new BaseballPlayer("B Harper", "Right Fielder");
        var marsh = new BaseballPlayer("B Marsh", "Right Fielder");
        phillies.addTeamMember(harper);
        phillies.addTeamMember(marsh);
        var guthrie = new BaseballPlayer("D Guthrie", "Center Fielder");
        phillies.addTeamMember(guthrie);
        phillies.listTeamMembers();

//        SportsTeam afc1 = new SportsTeam ("Adelaide Crows");
        Team<FootballPlayer, String> afc = new Team<>("Adelaide Crows",
                "City of Adelaide, South Australia, in AU");
        var tex = new FootballPlayer("Tex Walker" , "Centre half forward");
        afc.addTeamMember(tex);
        var rory = new FootballPlayer("Rory Laird", "Midfield");
        afc.addTeamMember(rory);
        afc.listTeamMembers();

        Team<VolleyballPlayer, Affiliation> adelaide = new Team<>("Adelaide Storm");
        adelaide.addTeamMember(new VolleyballPlayer("N Roberts", "Setter"));
        adelaide.listTeamMembers();

        var canberra = new Team<VolleyballPlayer, Affiliation>("Canberra Heat");
        canberra.addTeamMember(new VolleyballPlayer("B Black", "Opposite"));
        canberra.listTeamMembers();
        scoreResult(canberra, 0, adelaide, 1);

//        Team<Integer> melbourneVB = new Team<>("Melbourne Vipers");
    }
    
    public static void scoreResult(BaseballTeam team1, int t1_score,
                                   BaseballTeam team2, int t2_score) {

        String message = team1.setScore(t1_score, t2_score);
        team2.setScore(t2_score, t1_score);
        System.out.printf("%s %s %s %n", team1, message, team2);
    }

    public static void scoreResult(SportsTeam team1, int t1_score,
                                   SportsTeam team2, int t2_score) {

        String message = team1.setScore(t1_score, t2_score);
        team2.setScore(t2_score, t1_score);
        System.out.printf("%s %s %s %n", team1, message, team2);
    }

    public static void scoreResult(Team team1, int t1_score,
                                   Team team2, int t2_score) {
// Above warnings are not addressed yet. Generics can be quite tricky when 
// used in method parameters and the rules are different when they are used 
// in static method vs instance method.
// Above is an example for raw use of the generics where we haven't specified the type.
        String message = team1.setScore(t1_score, t2_score);
        team2.setScore(t2_score, t1_score);
        System.out.printf("%s %s %s %n", team1, message, team2);
    }
}



