/**
 * Problem: 0/1 Knapsack Problem
 * Difficulty: Advanced
 * 
 * Description:
 * Given weights and values of n items, put these items in a knapsack of capacity W
 * to get the maximum total value in the knapsack. You cannot break an item,
 * either pick the complete item or don't pick it (0-1 property).
 * 
 * Example:
 * Input: values = [60, 100, 120], weights = [10, 20, 30], capacity = 50
 * Output: 220
 * Explanation: Pick items with values 100 and 120 (weights 20 + 30 = 50)
 * 
 * Input: values = [10, 40, 30, 50], weights = [5, 4, 6, 3], capacity = 10
 * Output: 90
 * Explanation: Pick items with values 40 and 50 (weights 4 + 3 = 7)
 */

// Solution 1: Recursive with Memoization
function knapsack1(values, weights, capacity) {
  const n = values.length;
  const memo = new Map();
  
  function solve(index, remainingCapacity) {
    // Base cases
    if (index >= n || remainingCapacity <= 0) {
      return 0;
    }
    
    const key = `${index},${remainingCapacity}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    
    // Option 1: Don't include current item
    let maxValue = solve(index + 1, remainingCapacity);
    
    // Option 2: Include current item if it fits
    if (weights[index] <= remainingCapacity) {
      maxValue = Math.max(
        maxValue,
        values[index] + solve(index + 1, remainingCapacity - weights[index])
      );
    }
    
    memo.set(key, maxValue);
    return maxValue;
  }
  
  return solve(0, capacity);
}

// Solution 2: Dynamic Programming (Bottom-up)
function knapsack2(values, weights, capacity) {
  const n = values.length;
  
  // Create DP table
  const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
  
  // Fill the DP table
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      // Don't include current item
      dp[i][w] = dp[i - 1][w];
      
      // Include current item if it fits
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      }
    }
  }
  
  return dp[n][capacity];
}

// Solution 3: Space-optimized DP (using 1D array)
function knapsack3(values, weights, capacity) {
  const n = values.length;
  const dp = Array(capacity + 1).fill(0);
  
  for (let i = 0; i < n; i++) {
    // Traverse from right to left to avoid overwriting
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
    }
  }
  
  return dp[capacity];
}

// Helper function to also return selected items
function knapsackWithItems(values, weights, capacity) {
  const n = values.length;
  const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
  
  // Fill DP table
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      dp[i][w] = dp[i - 1][w];
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      }
    }
  }
  
  // Backtrack to find selected items
  const selectedItems = [];
  let w = capacity;
  for (let i = n; i > 0 && w > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedItems.push(i - 1);
      w -= weights[i - 1];
    }
  }
  
  return {
    maxValue: dp[n][capacity],
    items: selectedItems.reverse()
  };
}

// Test cases
console.log('Test Case 1:');
const values1 = [60, 100, 120];
const weights1 = [10, 20, 30];
const capacity1 = 50;
console.log('Solution 1:', knapsack1(values1, weights1, capacity1)); // Expected: 220
console.log('Solution 2:', knapsack2(values1, weights1, capacity1)); // Expected: 220
console.log('Solution 3:', knapsack3(values1, weights1, capacity1)); // Expected: 220
console.log('With items:', knapsackWithItems(values1, weights1, capacity1));

console.log('\nTest Case 2:');
const values2 = [10, 40, 30, 50];
const weights2 = [5, 4, 6, 3];
const capacity2 = 10;
console.log('Solution 1:', knapsack1(values2, weights2, capacity2)); // Expected: 90
console.log('Solution 2:', knapsack2(values2, weights2, capacity2)); // Expected: 90
console.log('Solution 3:', knapsack3(values2, weights2, capacity2)); // Expected: 90
console.log('With items:', knapsackWithItems(values2, weights2, capacity2));

console.log('\nTest Case 3:');
const values3 = [1, 4, 5, 7];
const weights3 = [1, 3, 4, 5];
const capacity3 = 7;
console.log('Solution 1:', knapsack1(values3, weights3, capacity3)); // Expected: 9
console.log('Solution 2:', knapsack2(values3, weights3, capacity3)); // Expected: 9
console.log('Solution 3:', knapsack3(values3, weights3, capacity3)); // Expected: 9
console.log('With items:', knapsackWithItems(values3, weights3, capacity3));

// Time Complexity:
// Solution 1: O(n * W) with memoization
// Solution 2: O(n * W) - fills entire DP table
// Solution 3: O(n * W) - same iterations, optimized space
//
// Space Complexity:
// Solution 1: O(n * W) - memoization map
// Solution 2: O(n * W) - 2D DP table
// Solution 3: O(W) - 1D DP array
