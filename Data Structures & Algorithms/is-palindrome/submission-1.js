class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const clean = (s) => { 
            let ref = 'abcdefghijklmnopqrstuvwxyz0123456789'; 
            let cleaned = ''; 
            for (let char of s) if (ref.includes(char.toLowerCase())) cleaned += char.toLowerCase(); 
            return cleaned
        }


        let cleaned = clean(s); 
        let left = 0; 
        let right = cleaned.length - 1; 

        while (left <= right) { 
            if (cleaned[left] !== cleaned[right]) return false; 
            left++
            right--
        }

        return true

    }
}
