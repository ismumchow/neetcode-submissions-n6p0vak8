class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0; 
        let right = heights.length - 1; 


        let maxArea = 0; 


        while (left < right) {
            let h = Math.min(heights[left], heights[right]); 
            let a = (right - left) * h
            maxArea = Math.max(a, maxArea);
            heights[left] > heights[right] ? right-- : left++
        }


        return maxArea




    }
}
