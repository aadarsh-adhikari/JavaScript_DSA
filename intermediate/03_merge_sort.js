/**
 * Problem: Merge Sort
 * Difficulty: Intermediate
 * 
 * Description:
 * Implement the merge sort algorithm to sort an array in ascending order.
 * Merge sort is a divide-and-conquer algorithm that divides the array into halves,
 * recursively sorts them, and then merges the sorted halves.
 * 
 * Example:
 * Input: [64, 34, 25, 12, 22, 11, 90]
 * Output: [11, 12, 22, 25, 34, 64, 90]
 * 
 * Input: [5, 2, 8, 1, 9]
 * Output: [1, 2, 5, 8, 9]
 */

// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge Sort implementation
function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

// Test cases
console.log('Test Case 1:');
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
// Expected: [11, 12, 22, 25, 34, 64, 90]

console.log('\nTest Case 2:');
console.log(mergeSort([5, 2, 8, 1, 9]));
// Expected: [1, 2, 5, 8, 9]

console.log('\nTest Case 3:');
console.log(mergeSort([1]));
// Expected: [1]

console.log('\nTest Case 4:');
console.log(mergeSort([]));
// Expected: []

console.log('\nTest Case 5:');
console.log(mergeSort([3, 3, 1, 2, 3]));
// Expected: [1, 2, 3, 3, 3]

console.log('\nTest Case 6:');
console.log(mergeSort([-5, -1, -3, -2, -4]));
// Expected: [-5, -4, -3, -2, -1]

// Time Complexity: O(n log n)
// - The array is divided log n times
// - Each merge operation takes O(n) time
//
// Space Complexity: O(n)
// - Requires additional space for the temporary arrays during merging
// - Call stack depth is O(log n) but temporary arrays take O(n) space
