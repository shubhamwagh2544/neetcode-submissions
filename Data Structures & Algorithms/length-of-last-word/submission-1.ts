class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        // s = s.trim();
        let i = s.length-1;
        while (i >= 0 && s[i] === " ") {
            i--;
        }
        let count = 0;
        while(i >= 0 && s[i--] !== " ") {
            count++;
        }
        return count;
    }
}
