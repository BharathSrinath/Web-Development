package zoho;

import java.util.*;

public class Solution26 {
    public List<Integer> zoho(int[] nums, int k) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : nums)
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);

        PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) -> freqMap.get(a) - freqMap.get(b));
        for (int key : freqMap.keySet()) {
            heap.add(key);
            if (heap.size() > k) heap.poll();
        }

        List<Integer> result = new ArrayList<>();
        while (!heap.isEmpty())
            result.add(heap.poll());
        Collections.reverse(result);
        return result;
    }

    public static void main(String[] args) {
        Solution26 solution26 = new Solution26();
        int[] nums = {1, 1, 1, 2, 2, 3};
        int k = 2;
        System.out.println("Top K frequent elements: " + solution26.zoho(nums, k));
    }
}
