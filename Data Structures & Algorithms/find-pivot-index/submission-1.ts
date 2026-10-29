class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let totalSum = 0;
        for (const num of nums) {
            totalSum += num;
        }

        let prefixSum = 0;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (prefixSum === totalSum - prefixSum - num) {
                return i;
            }
            prefixSum += num;
        }

        return -1;
    }
}
