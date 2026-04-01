class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // approach 
        // we are storing the max index at each window in deque (a queue that is decreasing)
        // if index in front of queue is out of window we push out 

        let deque = []; 
        let res = []; 

        for (let i = 0; i < nums.length; i++) {
            if (deque.length && deque[0] < i - k + 1) deque.shift(); 

            while (deque.length && nums[deque[deque.length -1]] < nums[i]) deque.pop();
            deque.push(i);

            if (i >= k - 1) res.push(nums[deque[0]]);
        }

        return res



    }
}
