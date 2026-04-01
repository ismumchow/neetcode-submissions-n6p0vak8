class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let max = 0;
        let curr = prices[0]; 

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < curr) curr = prices[i]; 
            max = Math.max(max, prices[i] - curr)
        }


        return max;

        
    }
}
