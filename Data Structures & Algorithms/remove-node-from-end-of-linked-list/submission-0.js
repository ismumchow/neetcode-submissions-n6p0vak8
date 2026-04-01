/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let len = 0; 
        let curr = head; 



        while (curr) {
            curr = curr.next;
            len++
        }

        if (n == len) return head.next

        curr = head; 

       for (let i = 0; i < len - n - 1; i++) {
        curr = curr.next;
       }
        curr.next = curr.next.next ?? null

        return head
    }
}
