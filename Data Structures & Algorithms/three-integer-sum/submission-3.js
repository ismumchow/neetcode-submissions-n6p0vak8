class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b); 
        const res = []; 

        const search = (i) => { 
            let left = i + 1;
            let right = nums.length - 1; 

            while (left < right) { 
                let sum = nums[left] + nums[i] + nums[right];
                if (sum == 0) { 
                    res.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++
                    while (left < right && nums[right] === nums[right - 1]) right--
                    left++
                    right--
                }
                else if (sum < 0) left++
                else right--
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i -1]) continue
            search(i)
        }

        return res
    }
}
