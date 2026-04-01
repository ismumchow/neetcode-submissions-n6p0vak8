class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let sorted = s.split('').sort();
        let sorted2 = t.split('').sort(); 

        if (sorted.length !== sorted2.length) return false; 

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i] !== sorted2[i]) return false
        }


        return true



    }
}
