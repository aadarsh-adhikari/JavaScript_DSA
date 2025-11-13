/**
 * Problem: Find Maximum Number in Array
 * Difficulty: Beginner
 * 
 * Description:
 * Write a function that takes an array of numbers and returns the maximum number.
 * 
 * Example:
 * Input: [1, 5, 3, 9, 2]
 * Output: 9
 * 
 * Input: [-1, -5, -3, -9, -2]
 * Output: -1
 */

// Solution 1: Using Math.max with spread operator
function findMax1(arr) {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

// Solution 2: Using a loop
function findMax2(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Solution 3: Using reduce
function findMax3(arr) {
  if (arr.length === 0) return undefined;
  return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

// Test cases
console.log('Test Case 1:');
console.log(findMax1([1, 5, 3, 9, 2])); // Expected: 9
console.log(findMax2([1, 5, 3, 9, 2])); // Expected: 9
console.log(findMax3([1, 5, 3, 9, 2])); // Expected: 9

console.log('\nTest Case 2:');
console.log(findMax1([-1, -5, -3, -9, -2])); // Expected: -1
console.log(findMax2([-1, -5, -3, -9, -2])); // Expected: -1
console.log(findMax3([-1, -5, -3, -9, -2])); // Expected: -1

console.log('\nTest Case 3:');
console.log(findMax1([42])); // Expected: 42
console.log(findMax2([42])); // Expected: 42
console.log(findMax3([42])); // Expected: 42

console.log('\nTest Case 4:');
console.log(findMax1([])); // Expected: undefined
console.log(findMax2([])); // Expected: undefined
console.log(findMax3([])); // Expected: undefined

// Time Complexity:
// Solution 1: O(n) - Math.max iterates through all elements
// Solution 2: O(n) - single loop through array
// Solution 3: O(n) - reduce iterates through all elements
//
// Space Complexity:
// All solutions: O(1) - only storing the max value
