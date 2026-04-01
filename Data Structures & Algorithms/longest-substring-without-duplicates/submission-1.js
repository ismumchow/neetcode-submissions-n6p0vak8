class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let ws = 0; 
        let maxLen = 0; 
        let hash = {}


        for (let we = 0; we < s.length; we++) {
        
            let curr = s[we]; 
            hash[curr] = (hash[curr] ?? 0 ) + 1

            while (hash[curr] > 1) {
                let start = s[ws]; 
                hash[start] -= 1;
                ws++
            }

            maxLen = Math.max( we - ws + 1, maxLen)

        }

        return maxLen



    }
}
