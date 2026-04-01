class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let i = 0; i < strs.length; i++) res += strs[i].length + '#' + strs[i];
        return res; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let i = 0; 

        const res = []; 

        while (i < str.length) {
            let j = i + 1; 
            while (str[j] !== '#') j++; 
            let len = parseInt(str.slice(i,j));
            let word = str.slice(j+1, j + 1 + len);
            res.push(word)
            i = j + 1 + len; 
        }

        return res

    }
}
