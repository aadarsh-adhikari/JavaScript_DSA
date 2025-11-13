/**
 * Problem: Valid Parentheses
 * Difficulty: Intermediate
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 
 * Example:
 * Input: "()"
 * Output: true
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * Input: "(]"
 * Output: false
 */

function isValidParentheses(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

module.exports = { isValidParentheses };
