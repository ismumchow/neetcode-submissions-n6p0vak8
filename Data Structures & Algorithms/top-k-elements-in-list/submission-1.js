class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const freq = {}; 

        for (let i = 0; i < nums.length; i++) freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] + 1 : 1; 


        return Object.keys(freq).sort((a,b) => freq[b] - freq[a]).map(Number).slice(0, k)




    }
}
