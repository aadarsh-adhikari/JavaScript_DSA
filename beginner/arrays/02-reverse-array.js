/**
 * Problem: Reverse an array
 * Difficulty: Beginner
 * 
 * Given an array, return a new array with elements in reverse order.
 * 
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 */

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// In-place reversal
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

module.exports = { reverseArray, reverseArrayInPlace };
