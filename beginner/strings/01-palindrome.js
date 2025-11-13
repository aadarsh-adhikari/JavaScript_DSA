/**
 * Problem: Check if a string is a palindrome
 * Difficulty: Beginner
 * 
 * A palindrome is a word that reads the same forwards and backwards.
 * 
 * Example:
 * Input: "racecar"
 * Output: true
 * 
 * Input: "hello"
 * Output: false
 */

function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let left = 0;
  let right = cleanStr.length - 1;
  
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Alternative using reverse
function isPalindromeAlt(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = { isPalindrome, isPalindromeAlt };
