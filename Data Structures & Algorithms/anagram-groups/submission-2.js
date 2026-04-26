class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let groups = {}; 

        for (let str of strs) { 
            let sorted = str.split('').sort().join();
           groups[sorted] ? groups[sorted].push(str) : groups[sorted] = [str];
        }

        return Object.values(groups)


    }
}
