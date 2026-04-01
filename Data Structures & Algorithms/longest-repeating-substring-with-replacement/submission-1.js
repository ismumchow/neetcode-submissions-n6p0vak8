class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let charFreq = {}; 
        let maxFreq = 0; 
        let maxLen = 0; 
        let ws = 0; 


        for (let we = 0; we < s.length; we++) {
            let curr = s[we];
            charFreq[curr] = (charFreq[curr] ?? 0) + 1; 
            maxFreq = Math.max(charFreq[curr], maxFreq);

            while ( we - ws + 1 - maxFreq > k) {
                let start = s[ws]; 
                charFreq[start] -= 1; 
                ws++; 
            }

            maxLen = Math.max( we - ws + 1, maxLen)
        }

        return maxLen






    }
}
