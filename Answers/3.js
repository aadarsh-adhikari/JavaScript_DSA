function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = "";

    // Take the first word as reference
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];

        // Compare this char with all other strings
        for (let s of strs) {
            if (i >= s.length || s[i] !== char) {
                return prefix; // mismatch → return current prefix
            }
        }

        prefix += char; // if matched in all, add to prefix
    }

    return prefix;
}

// Example
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
