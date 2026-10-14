class Solution {
    isSubsequence(s: string, t: string): boolean {
        let i=0;
        for (let j = 0; j < t.length; j++) {
            if (s.charAt(i) === t.charAt(j)) {
                i++;
            }
        }
        console.log(i)
        return i === s.length;
    }
}
