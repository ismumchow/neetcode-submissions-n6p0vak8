class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0
        const set = new Set(); 
        let maxLen = 1;
        for (let num of nums) set.add(num); 

        for (let i = 0; i < nums.length; i++) { 
            if (!set.has(nums[i] -1)) { 
                let max = 1;
                while (set.has(nums[i] + max)) max++
                maxLen = Math.max(max, maxLen)
            }
        }


        return maxLen
    }
}
