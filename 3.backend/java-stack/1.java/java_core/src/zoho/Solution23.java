package zoho;

import java.util.LinkedHashMap;
import java.util.Map;

public class Solution23 {
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
        Solution23 solution23 = new Solution23();
        String input = "zohoz";
        System.out.println("First unique character: " + solution23.zoho(input));
    }
}
