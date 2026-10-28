class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        const result: number[][] = []
        for (let i = 0; i < numRows; i++) {
            const tempList = []
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    tempList.push(1);
                } else {
                    const sum = result[i-1][j-1] + result[i-1][j];
                    tempList.push(sum)
                }
            }
            result.push(tempList)
        }
        return result;
    }
}
