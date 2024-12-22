package zoho;

import java.util.HashSet;

public class Solution19 {
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
        Solution19 solution19 = new Solution19();
        String input = "abcabcbb";
        System.out.println("Longest substring length: " + solution19.zoho(input));
    }
}
