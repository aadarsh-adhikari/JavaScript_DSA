/**
 * Problem: Fibonacci Sequence
 * Difficulty: Advanced
 * 
 * Calculate the nth Fibonacci number using dynamic programming.
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
 * 
 * Example:
 * Input: n = 6
 * Output: 8
 */

// Recursive approach (inefficient)
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Dynamic Programming - Memoization (Top-Down)
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// Dynamic Programming - Tabulation (Bottom-Up)
function fibonacciTabulation(n) {
  if (n <= 1) return n;
  
  const dp = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

// Space-optimized approach
function fibonacciOptimized(n) {
  if (n <= 1) return n;
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  
  return curr;
}

module.exports = { 
  fibonacciRecursive, 
  fibonacciMemo, 
  fibonacciTabulation, 
  fibonacciOptimized 
};
