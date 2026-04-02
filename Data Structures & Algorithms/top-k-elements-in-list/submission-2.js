class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const freq = {};

        for (let i = 0; i < nums.length; i++) {

            let curr = nums[i];

            freq[curr] = freq[curr] ? freq[curr] + 1 : 1 

        }


        return Object.keys(freq).sort((a,b) => freq[b] - freq[a]).slice(0,k)



    }
}
