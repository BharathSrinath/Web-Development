package collections;

import java.util.ArrayList;
import java.util.LinkedList;

public class Collections_userDefined_Lists_Songs_album {
    String name;
    String artist;
    private ArrayList<Collections_userDefined_Lists_Songs_song> songs;

    public Collections_userDefined_Lists_Songs_album(String name, String artist) {
        this.name = name;
        this.artist = artist;
        this.songs = new ArrayList<>();
    }

    public boolean addSong(String songTitle, double songDuration) {
        if (findSong(songTitle) == null) {
            songs.add(new Collections_userDefined_Lists_Songs_song(songTitle, songDuration));
            return true;
        }
        return false;
    }

    private Collections_userDefined_Lists_Songs_song findSong(String songTitle) {
        for (Collections_userDefined_Lists_Songs_song song : songs) {
            if (song.getTitle().equals(songTitle)) {
                return song;
            }
        }
        return null;
    }

    public boolean addToPlayList(int trackNumber, LinkedList<Collections_userDefined_Lists_Songs_song> playlist) {
        int index = trackNumber - 1;
        if (index >= 0 && index < songs.size()) {
            playlist.add(songs.get(index));
            return true;
        }
        return false;
    }

    public boolean addToPlayList(String songTitle, LinkedList<Collections_userDefined_Lists_Songs_song> playlist) {
        Collections_userDefined_Lists_Songs_song song = findSong(songTitle);
        if (song != null) {
            playlist.add(song);
            return true;
        }
        return false;
    }
}
