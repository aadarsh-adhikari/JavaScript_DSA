/**
 * Problem: Find the maximum element in an array
 * Difficulty: Beginner
 * 
 * Given an array of numbers, return the maximum element.
 * 
 * Example:
 * Input: [1, 5, 3, 9, 2]
 * Output: 9
 */

function findMax(arr) {
  if (arr.length === 0) return null;
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Alternative solution using Math.max
function findMaxAlt(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

module.exports = { findMax, findMaxAlt };
