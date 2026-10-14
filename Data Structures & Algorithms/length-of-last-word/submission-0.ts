class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let lsatWord = "";
        s = s.trim();
        for (let i = s.length-1; i >= 0; i--) {
            if (s.charAt(i) !== " ") {
                lsatWord += s.charAt(i)
            } else {
                break;
            }
        }
        return lsatWord.length;
    }
}
