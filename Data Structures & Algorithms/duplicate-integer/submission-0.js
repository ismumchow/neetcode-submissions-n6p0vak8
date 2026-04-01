class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums = nums.sort((a,b) => a-b);
        let lnd = 1; 

        for (let i = 1; i < nums.length; i++){
            if (nums[i] != nums[i-1]) lnd = i; 
            else return true

        }

        return false;
    }
}
