class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let res = ''

        for (let i = 0; i < strs.length;i++) {
            let curr = '';
            res+= strs[i].length + '#' + strs[i];
        }

     
        return res


    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

       const res = [];
       let i = 0;


       while (i < str.length) {
            let j = i + 1;
            while (str[j] !== '#') j++; 
            let len = parseInt(str.slice(i,j)); 
            let word = str.slice(j + 1, len + j + 1);
            i = len + j + 1;
            res.push(word)
       }

       return res

    }
}
