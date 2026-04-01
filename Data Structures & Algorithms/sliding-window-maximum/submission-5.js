class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        const deque = []; 

        for (let we = 0; we < nums.length; we++) {
            let ws = we - k + 1; 
            if (deque.length && deque[0] < ws) deque.shift(); 

            while (deque.length && nums[deque[deque.length -1]] <= nums[we]) deque.pop(); 
            deque.push(we); 
            if (we >= k - 1) res.push(nums[deque[0]]);        }

        return res
    }
}
