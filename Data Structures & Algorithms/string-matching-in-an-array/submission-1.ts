class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words: string[]): string[] {
        const result = new Set<string>();
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            for (let j = 0; j < words.length; j++) {
                if (i !== j && words[j].includes(words[i])) {
                    result.add(word)
                }
            }
        }
        // return [...result];
        return Array.from(result);
    }
}
