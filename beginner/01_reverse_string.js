/**
 * Problem: Reverse a String
 * Difficulty: Beginner
 * 
 * Description:
 * Write a function that takes a string as input and returns the string reversed.
 * 
 * Example:
 * Input: "hello"
 * Output: "olleh"
 * 
 * Input: "JavaScript"
 * Output: "tpircSavaJ"
 */

// Solution 1: Using built-in methods
function reverseString1(str) {
  return str.split('').reverse().join('');
}

// Solution 2: Using a loop
function reverseString2(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Solution 3: Using recursion
function reverseString3(str) {
  if (str === '') return '';
  return reverseString3(str.substr(1)) + str.charAt(0);
}

// Test cases
console.log('Test Case 1:');
console.log(reverseString1("hello")); // Expected: "olleh"
console.log(reverseString2("hello")); // Expected: "olleh"
console.log(reverseString3("hello")); // Expected: "olleh"

console.log('\nTest Case 2:');
console.log(reverseString1("JavaScript")); // Expected: "tpircSavaJ"
console.log(reverseString2("JavaScript")); // Expected: "tpircSavaJ"
console.log(reverseString3("JavaScript")); // Expected: "tpircSavaJ"

console.log('\nTest Case 3:');
console.log(reverseString1("")); // Expected: ""
console.log(reverseString2("")); // Expected: ""
console.log(reverseString3("")); // Expected: ""

// Time Complexity:
// Solution 1: O(n) - split, reverse, and join each iterate through the string
// Solution 2: O(n) - single loop through the string
// Solution 3: O(n) - recursive calls equal to string length
//
// Space Complexity:
// Solution 1: O(n) - creates array of characters
// Solution 2: O(n) - stores reversed string
// Solution 3: O(n) - call stack space for recursion
