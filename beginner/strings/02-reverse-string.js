/**
 * Problem: Reverse a string
 * Difficulty: Beginner
 * 
 * Given a string, return the string reversed.
 * 
 * Example:
 * Input: "hello"
 * Output: "olleh"
 */

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Using built-in methods
function reverseStringAlt(str) {
  return str.split('').reverse().join('');
}

module.exports = { reverseString, reverseStringAlt };
