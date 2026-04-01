class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const map = { 
            ')': '(', 
            '}': '{', 
            ']': '[', 
        }   
        const stack = []

        const open = Object.values(map);

        for (let i = 0; i < s.length; i++) {
            let curr = s[i];
            if(open.includes(curr)) stack.push(curr); 
            else if (map[curr] !== stack.pop()) return false

        }
        return stack.length == 0

    }
}
