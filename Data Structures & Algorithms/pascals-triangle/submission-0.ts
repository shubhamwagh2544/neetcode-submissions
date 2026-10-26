class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        const res = []
        for (let i = 0; i < numRows; i++) {
            const tempList = []
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    tempList.push(1)
                } else {
                    tempList.push(this.ncr(i, j))
                }
            }
            res.push(tempList)
        }
        return res;
    }

    ncr(n: number, r: number): number {
        let result = 1;
        for (let i = 1; i <= r; i++) {
            result = (result * (n - i + 1)) / i;
        }
        return result;
    }
}
