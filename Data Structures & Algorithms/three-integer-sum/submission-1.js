class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a -b); 

        const res = []; 
        const search = (targ, currIdx) => { 
            let left = currIdx + 1; 
            let right = nums.length - 1; 

            while (left < right) {
                let sum = nums[left] + nums[right] + targ
                if ( sum === 0) { 
                    res.push([nums[left], nums[right], nums[currIdx]]); 
                    left++
                    right--
                    while (left < right && nums[left] === nums[left - 1]) left++
                    while (left < right && nums[right] === nums[right + 1])right--
                } 
                else if (sum < 0) left++
                else right--

            }

        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 &&  nums[i] == nums[i-1]) continue; // want nums[i] to be unique
            search(nums[i], i)
        }


        return res

    }
}
