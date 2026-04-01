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
     * @return {void}
     */
    reorderList(head) {

        if (!head) return 
        let slow = head;
        let fast = head; 

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next; 
        }

        let second = slow.next; 
        slow.next = null; 
        let prev = null;
        while (second) {
            let next = second.next;
            second.next = prev; 
            prev = second;
            second = next;
        }

        second = prev; 
        let first = head; 

        while (second) {
            let t1 = first.next; 
            let t2 = second.next; 

            first.next = second; 
            second.next = t1; 

            first = t1; 
            second = t2;
        }

        return head

    }
}
