package zoho;

class Solution14 {
    public String zoho(String[] strs) {
        if (strs.length == 0) return "";
        String temp = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(temp) != 0) {
                temp = temp.substring(0, temp.length() - 1);
                if (temp.isEmpty()) return "";
            }
        }
        return temp;
    }

    public static void main(String[] args) {
        Solution14 solution14 = new Solution14();
        String[] strs = {"flower", "flow", "flight"};
        System.out.println(solution14.zoho(strs)); 
    }
}

