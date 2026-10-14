class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // if (arr.length === 1) return [-1];
        // let secondLast = 0;
        // let max = -Infinity;
        // for (let i = arr.length - 1; i >= 0; i--) {
        //     if (i === arr.length - 1) {
        //         secondLast = arr[i];
        //         continue;
        //     } else {
        //         max = Math.max(secondLast, max);
        //         secondLast = arr[i];
        //         arr[i] = max;
        //     }
        // }
        // arr[arr.length - 1] = -1;
        // return arr;
        
        let max = -1;
        for(let i = arr.length -1 ; i >= 0 ; i--  ){
            let currentValue = arr[i];
            arr[i] = max ;
            if (currentValue > max){
                max = currentValue
            }
        }
        return arr ;
    }
}
