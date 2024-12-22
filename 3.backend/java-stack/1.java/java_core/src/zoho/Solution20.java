package zoho;

import java.util.PriorityQueue;

public class Solution20 {
    private PriorityQueue<Integer> heap;
    private int k;

    public Solution20(int k, int[] nums) {
        this.k = k;
        this.heap = new PriorityQueue<>();
        for (int num : nums) {
            heap.add(num);
            if (heap.size() > k) heap.poll();
        }
    }

    public int add(int val) {
        heap.add(val);
        if (heap.size() > k) heap.poll();
        return heap.peek();
    }

    public static void main(String[] args) {
        int[] nums = {4, 5, 8, 2};
        Solution20 obj = new Solution20(3, nums);
        System.out.println("Kth largest: " + obj.add(3)); // Output: 4
    }
}
