class Solution {
  longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";
    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      for (const str of strs) {
        if (str[i] !== char) {
          return strs[0].slice(0, i);
        }
      }
    }
    return strs[0];
  }
}
