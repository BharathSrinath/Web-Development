package zoho;

import java.util.Pair; // Ensure you import javafx.util.Pair or implement your own Pair class.

public class Solution10 {
    public int zoho(int[] nums) {
        Pair<Integer, Boolean> a = new Pair<>(-1, false);
        Pair<Integer, Boolean> b = new Pair<>(-1, false);
        Pair<Integer, Boolean> c = new Pair<>(-1, false);

        for (int num : nums) {
            if ((a.getValue() && a.getKey() == num) || 
                (b.getValue() && b.getKey() == num) || 
                (c.getValue() && c.getKey() == num)) {
                continue;
            }

            if (!a.getValue() || a.getKey() < num) {
                c = b;
                b = a;
                a = new Pair<>(num, true);
            } else if (!b.getValue() || b.getKey() < num) {
                c = b;
                b = new Pair<>(num, true);
            } else if (!c.getValue() || c.getKey() < num) {
                c = new Pair<>(num, true);
            }
        }

        return c.getValue() ? c.getKey() : a.getKey();
    }

    public static void main(String[] args) {
        Solution10 solution10 = new Solution10();
        int[] nums = {2, 2, 3, 1};
        System.out.println("Third maximum number: " + solution10.zoho(nums));
    }
}
