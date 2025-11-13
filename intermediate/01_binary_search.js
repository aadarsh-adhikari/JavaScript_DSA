/**
 * Problem: Binary Search
 * Difficulty: Intermediate
 * 
 * Description:
 * Implement binary search algorithm to find the index of a target value in a sorted array.
 * Return -1 if the target is not found.
 * 
 * Example:
 * Input: arr = [1, 3, 5, 7, 9, 11], target = 7
 * Output: 3
 * 
 * Input: arr = [1, 3, 5, 7, 9, 11], target = 6
 * Output: -1
 */

// Solution 1: Iterative Binary Search
function binarySearch1(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Solution 2: Recursive Binary Search
function binarySearch2(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch2(arr, target, mid + 1, right);
  } else {
    return binarySearch2(arr, target, left, mid - 1);
  }
}

// Test cases
console.log('Test Case 1:');
console.log(binarySearch1([1, 3, 5, 7, 9, 11], 7)); // Expected: 3
console.log(binarySearch2([1, 3, 5, 7, 9, 11], 7)); // Expected: 3

console.log('\nTest Case 2:');
console.log(binarySearch1([1, 3, 5, 7, 9, 11], 6)); // Expected: -1
console.log(binarySearch2([1, 3, 5, 7, 9, 11], 6)); // Expected: -1

console.log('\nTest Case 3:');
console.log(binarySearch1([1, 3, 5, 7, 9, 11], 1)); // Expected: 0
console.log(binarySearch2([1, 3, 5, 7, 9, 11], 1)); // Expected: 0

console.log('\nTest Case 4:');
console.log(binarySearch1([1, 3, 5, 7, 9, 11], 11)); // Expected: 5
console.log(binarySearch2([1, 3, 5, 7, 9, 11], 11)); // Expected: 5

console.log('\nTest Case 5:');
console.log(binarySearch1([], 5)); // Expected: -1
console.log(binarySearch2([], 5)); // Expected: -1

// Time Complexity:
// Both solutions: O(log n) - array is halved in each iteration
//
// Space Complexity:
// Solution 1: O(1) - only uses a constant amount of extra space
// Solution 2: O(log n) - recursive call stack depth
