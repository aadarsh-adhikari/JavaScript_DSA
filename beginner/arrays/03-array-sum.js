/**
 * Problem: Find sum of all elements in an array
 * Difficulty: Beginner
 * 
 * Given an array of numbers, return the sum of all elements.
 * 
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: 15
 */

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Using reduce
function arraySumReduce(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

module.exports = { arraySum, arraySumReduce };
