class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = []; 
        for (let str of strs) { 
            let decoded =   str.length + "#" + str;
            res.push(decoded)
        }
        return res.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    
    const res = []; 
    let i = 0;
    while (i < str.length) { 
    let j = i; 
        while (str[j] !== '#') j++;
        let len = parseInt(str.slice(i,j))
        let curr = str.slice(j+1, j + 1 + len); 
        res.push(curr);
        i = j + 1 + len 
    }
    return res

    }
}
