package zoho;

import java.util.Arrays;

public class Solution16 {
    public boolean zoho(String s1, String s2) {
        char[] c1 = s1.toCharArray();
        char[] c2 = s2.toCharArray();
        Arrays.sort(c1);
        Arrays.sort(c2);
        return Arrays.equals(c1, c2);
    }

    public static void main(String[] args) {
        Solution16 solution16 = new Solution16();
        System.out.println("Are anagrams? " + solution16.zoho("listen", "silent"));
    }
}
