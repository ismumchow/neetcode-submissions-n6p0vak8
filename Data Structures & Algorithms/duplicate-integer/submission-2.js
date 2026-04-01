class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        nums.sort((a,b) => a - b); 

        let i = 0; 

        while (i < nums.length) {
            if (i > 0 && nums[i] == nums[i-1]) return true; 
            i++
        }


        return false



    }
}
