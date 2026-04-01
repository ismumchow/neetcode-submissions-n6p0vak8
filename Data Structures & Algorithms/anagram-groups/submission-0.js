class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = {}; 

        for (let i = 0; i < strs.length; i++){
            let curr = strs[i].split('').sort(); 
            if (!map[curr]) map[curr] = [];
            map[curr].push(strs[i])
        }


        return Object.values(map)
    }
}
