class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let freq = {}; 

        for (let char of s) freq[char] = (freq[char] ?? 0) + 1;


        for (let char of t) { 
            if (!(freq[char])) return false
            freq[char]-= 1; 
            if (freq[char] == 0) delete freq[char]
        }


        return Object.keys(freq).length == 0

    }
}
