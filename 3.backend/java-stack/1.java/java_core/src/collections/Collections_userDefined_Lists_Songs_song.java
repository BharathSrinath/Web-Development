package collections;

public class Collections_userDefined_Lists_Songs_song {
    private String title;
    private double duration;

    public Collections_userDefined_Lists_Songs_song(String title, double duration) {
        this.title = title;
        this.duration = duration;
    }

    public String getTitle() {
        return title;
    }

    @Override
    public String toString() {
        return title + ": " + duration;
    }
}
