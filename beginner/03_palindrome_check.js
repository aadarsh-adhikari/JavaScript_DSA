/**
 * Problem: Check if a String is a Palindrome
 * Difficulty: Beginner
 * 
 * Description:
 * Write a function that checks if a given string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 * 
 * Example:
 * Input: "racecar"
 * Output: true
 * 
 * Input: "hello"
 * Output: false
 */

// Solution 1: Using reverse and compare
function isPalindrome1(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Solution 2: Using two pointers
function isPalindrome2(str) {
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

// Solution 3: Using recursion
function isPalindrome3(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  function checkPalindrome(s, left, right) {
    if (left >= right) return true;
    if (s[left] !== s[right]) return false;
    return checkPalindrome(s, left + 1, right - 1);
  }
  
  return checkPalindrome(cleanStr, 0, cleanStr.length - 1);
}

// Test cases
console.log('Test Case 1:');
console.log(isPalindrome1("racecar")); // Expected: true
console.log(isPalindrome2("racecar")); // Expected: true
console.log(isPalindrome3("racecar")); // Expected: true

console.log('\nTest Case 2:');
console.log(isPalindrome1("hello")); // Expected: false
console.log(isPalindrome2("hello")); // Expected: false
console.log(isPalindrome3("hello")); // Expected: false

console.log('\nTest Case 3:');
console.log(isPalindrome1("A man a plan a canal Panama")); // Expected: true
console.log(isPalindrome2("A man a plan a canal Panama")); // Expected: true
console.log(isPalindrome3("A man a plan a canal Panama")); // Expected: true

console.log('\nTest Case 4:');
console.log(isPalindrome1("race a car")); // Expected: false
console.log(isPalindrome2("race a car")); // Expected: false
console.log(isPalindrome3("race a car")); // Expected: false

// Time Complexity:
// Solution 1: O(n) - split, reverse, join all take O(n)
// Solution 2: O(n) - single pass with two pointers
// Solution 3: O(n) - recursive calls up to n/2
//
// Space Complexity:
// Solution 1: O(n) - creates new arrays/strings
// Solution 2: O(n) - stores cleaned string
// Solution 3: O(n) - call stack space + cleaned string
