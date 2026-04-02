class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const set = new Set(); 

        for(let i = 0; i < nums.length; i++) set.add(nums[i])
        let maxLen = 0;

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] -1)) {
                let len = 0; 
                while (set.has(nums[i]+ len)) len++
                maxLen = Math.max(len, maxLen)
            } 
        }   

        return maxLen


    }
}
