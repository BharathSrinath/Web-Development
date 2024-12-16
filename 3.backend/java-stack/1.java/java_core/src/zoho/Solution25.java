package zoho;

import java.util.*;

public class Solution25 {
    public List<List<String>> zoho(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.putIfAbsent(key, new ArrayList<>());
            map.get(key).add(s);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        Solution25 solution25 = new Solution25();
        String[] input = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println("Grouped anagrams: " + solution25.zoho(input));
    }
}
