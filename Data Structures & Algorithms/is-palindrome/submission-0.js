class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {

        let cleaned = ''; 
        let ref = 'abcdefghijklmnopqrstuvwxyz0123456789'; 
        
        for (let char of s) if(ref.indexOf(char.toLowerCase())!= -1) cleaned+= char.toLowerCase()

       let left = 0; 
       let right = cleaned.length -1; 

       while (left < right) {
        if (cleaned[left] != cleaned[right]) return false
        left++
        right--
       }
      return true
      }

}
