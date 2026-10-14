class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let i = 0;
        for (let j = 0; j < s.length; j++) {
            if (t.charAt(i) === s.charAt(j)) {
                i++;
            }
        }
        return t.length-i;
    }
}
