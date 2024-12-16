package zoho;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution29 {
    public int[][] zoho(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        List<int[]> result = new ArrayList<>();

        int[] current = intervals[0];
        result.add(current);

        for (int[] interval : intervals) {
            if (interval[0] <= current[1]) {
                current[1] = Math.max(current[1], interval[1]);
            } else {
                current = interval;
                result.add(current);
            }
        }
        return result.toArray(new int[result.size()][]);
    }

    public static void main(String[] args) {
        Solution29 solution29 = new Solution29();
        int[][] intervals = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
        System.out.println("Merged intervals: " + Arrays.deepToString(solution29.zoho(intervals)));
    }
}
