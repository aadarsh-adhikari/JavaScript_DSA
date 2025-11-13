/**
 * Problem: Find the first non-repeating character
 * Difficulty: Beginner
 * 
 * Given a string, find the first character that does not repeat.
 * 
 * Example:
 * Input: "javascript"
 * Output: "j"
 * 
 * Input: "aabbcc"
 * Output: null
 */

function firstNonRepeating(str) {
  const charCount = {};
  
  // Count occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first non-repeating
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

module.exports = { firstNonRepeating };
