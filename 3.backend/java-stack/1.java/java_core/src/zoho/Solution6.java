package zoho;

import java.util.Arrays;

public class Solution6 {
    public int[] zoho(int num) {
        int[] f = new int[num + 1];
        for (int i = 1; i <= num; i++)
            f[i] = f[i >> 1] + (i & 1);
        return f;
    }

    public static void main(String[] args) {
        Solution6 solution6 = new Solution6();
        int n = 5;
        System.out.println("Counting bits: " + Arrays.toString(solution6.zoho(n)));
    }
}

