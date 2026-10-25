class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (const str of strs) {
            const sorted = str.split('').sort().join('');
            if (map.has(sorted)) {
                const arr = map.get(sorted);
                arr.push(str);
                map.set(sorted, arr);
            } else {
                const arr = [];
                arr.push(str);
                map.set(sorted, arr);
            }
        }
        const res = []
        for (const val of map.values()) {
            res.push(val)
        }

        return res;
    }
}
