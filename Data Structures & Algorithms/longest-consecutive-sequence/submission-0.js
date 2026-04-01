class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const numSet = new Set(nums); 
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            if (!numSet.has(nums[i]-1)) { // if set doesn't have left neighbor its the start of the sequence
                let len = 0;
                while (numSet.has(nums[i] + len)) len++; 
                longest = Math.max(longest,len)
            }
        }

        return longest


    }
}
