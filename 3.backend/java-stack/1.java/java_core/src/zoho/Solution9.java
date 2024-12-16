package zoho;

public class Solution9 {
    public int zoho(String str1, String str2) {
        int num = 0;
        for (int i = 0; i < str2.length(); i++) {
            if (str1.indexOf(str2.charAt(i)) != -1)
                num++;
        }
        return num;
    }

    public static void main(String[] args) {
        Solution9 solution9 = new Solution9();
        String str1 = "aA", str2 = "aAAbbbb";
        System.out.println("Number of jewels: " + solution9.zoho(str1, str2));
    }
}

