class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {


        const group = {}; 

        for (let str of strs) {

        let sorted = str.split('').sort().join(); 

        group[sorted] ? group[sorted].push(str) : group[sorted] = [str] 




        }


        return Object.values(group)




    }
}
