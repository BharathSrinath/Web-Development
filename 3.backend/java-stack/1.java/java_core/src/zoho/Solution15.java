package zoho;

import java.util.LinkedHashMap;
import java.util.Map;

public class Solution15 {
    public char zoho(String s) {
        Map<Character, Integer> map = new LinkedHashMap<>();
        for (char c : s.toCharArray())
            map.put(c, map.getOrDefault(c, 0) + 1);

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1)
                return entry.getKey();
        }
        return '_'; // If no unique character found
    }

    public static void main(String[] args) {
        Solution15 solution15 = new Solution15();
        String input = "zohoz";
        System.out.println("First unique character: " + solution15.zoho(input));
    }
}
