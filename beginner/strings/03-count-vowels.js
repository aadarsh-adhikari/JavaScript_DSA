/**
 * Problem: Count vowels in a string
 * Difficulty: Beginner
 * 
 * Count the number of vowels (a, e, i, o, u) in a string.
 * 
 * Example:
 * Input: "hello world"
 * Output: 3
 */

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// Using regex
function countVowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = { countVowels, countVowelsRegex };
