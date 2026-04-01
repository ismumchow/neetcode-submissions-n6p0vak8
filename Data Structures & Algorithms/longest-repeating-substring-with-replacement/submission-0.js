class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {


        let maxFreq = 0;
        let maxLen = 0;
        let ws = 0; 
        let freq = {}

        for (let we = 0; we < s.length; we++) {

            let curr = s[we];
            freq[curr] = (freq[curr] ?? 0) + 1; 

            maxFreq = Math.max(maxFreq, freq[curr]); 

            while (we - ws + 1 - maxFreq > k) {
                let start = s[ws]; 
                freq[start] -= 1; 
                ws++
            }

            maxLen = Math.max(we - ws + 1, maxLen)

        }

        return maxLen
    }
}
