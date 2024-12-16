package zoho;

import java.util.HashSet;

public class Solution27 {
    public int zoho(String s) {
        HashSet<Character> set = new HashSet<>();
        int left = 0, maxLength = 0;

        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left));
                left++;
            }
            set.add(s.charAt(right));
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        Solution27 solution27 = new Solution27();
        String input = "abcabcbb";
        System.out.println("Longest substring length: " + solution27.zoho(input));
    }
}
