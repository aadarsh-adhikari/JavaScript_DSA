/**
 * Problem: Two Sum
 * Difficulty: Intermediate
 * 
 * Description:
 * Given an array of integers and a target sum, return indices of the two numbers
 * that add up to the target. You may assume that each input has exactly one solution,
 * and you may not use the same element twice.
 * 
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 * 
 * Input: nums = [3, 2, 4], target = 6
 * Output: [1, 2]
 */

// Solution 1: Brute Force
function twoSum1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// Solution 2: Using Hash Map (Optimal)
function twoSum2(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}

// Test cases
console.log('Test Case 1:');
console.log(twoSum1([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum2([2, 7, 11, 15], 9)); // Expected: [0, 1]

console.log('\nTest Case 2:');
console.log(twoSum1([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum2([3, 2, 4], 6)); // Expected: [1, 2]

console.log('\nTest Case 3:');
console.log(twoSum1([3, 3], 6)); // Expected: [0, 1]
console.log(twoSum2([3, 3], 6)); // Expected: [0, 1]

console.log('\nTest Case 4:');
console.log(twoSum1([-1, -2, -3, -4, -5], -8)); // Expected: [2, 4]
console.log(twoSum2([-1, -2, -3, -4, -5], -8)); // Expected: [2, 4]

// Time Complexity:
// Solution 1: O(n²) - nested loops
// Solution 2: O(n) - single pass through array
//
// Space Complexity:
// Solution 1: O(1) - no extra space used
// Solution 2: O(n) - hash map to store elements
