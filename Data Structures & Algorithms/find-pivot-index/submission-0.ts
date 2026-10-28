class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const leftMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            leftMap.set(i, i === 0 ? 0 : leftMap.get(i-1)+nums[i-1])
        }
        // console.log(leftMap);
        
        const rightMap = new Map<number, number>();
        for (let i = nums.length-1; i >= 0; i--) {
            rightMap.set(i, i === nums.length-1 ? 0 : rightMap.get(i+1)+nums[i+1])
        }
        // console.log(rightMap);
        
        for (const [key, value] of leftMap.entries()) {
            if (rightMap.has(key) && value === rightMap.get(key)) {
                return key;
            }
        }

        return -1;
    }
}
