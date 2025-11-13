/**
 * Problem: Remove duplicates from array
 * Difficulty: Beginner
 * 
 * Given an array, return a new array with duplicate elements removed.
 * 
 * Example:
 * Input: [1, 2, 2, 3, 4, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 */

function removeDuplicates(arr) {
  const seen = new Set();
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      result.push(arr[i]);
    }
  }
  return result;
}

// Using Set
function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}

module.exports = { removeDuplicates, removeDuplicatesSet };
