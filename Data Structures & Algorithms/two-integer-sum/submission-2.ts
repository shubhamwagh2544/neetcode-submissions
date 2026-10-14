class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // two sum for ordered array
        //     let i = 0;
        //     let j = nums.length - 1;

        //     while (i !== j) {
        //         let sum = nums[i] + nums[j];
        //         if (sum === target) {
        //             return [i, j];
        //         } else if (sum > target) {
        //             if (sum > 0) j--;
        //             else i++;
        //         } else {
        //             if (sum > 0) i++;
        //             else j--;
        //         }
        //     }
        //     return [i, j];

        const map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (map.has(diff)) {
                return [i, map.get(diff)]
            }
            map.set(nums[i], i);
        }
    }
}
