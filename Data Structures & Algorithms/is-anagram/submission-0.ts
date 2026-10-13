class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const array = new Array<number>(26).fill(0); // O(1) space

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) { // O(m) time
            array[s.charCodeAt(i) - 97]++;
            array[t.charCodeAt(i) - 97]--;
        }

        for (const el of array) {
            if (el !== 0) {
                return false;
            }
        }

        return true;
    }
}
