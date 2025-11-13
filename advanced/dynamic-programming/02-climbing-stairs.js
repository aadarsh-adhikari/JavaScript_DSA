/**
 * Problem: Climbing Stairs
 * Difficulty: Advanced
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 * 
 * Example:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top:
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

// Dynamic Programming - Tabulation
function climbStairs(n) {
  if (n <= 2) return n;
  
  const dp = [0, 1, 2];
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

// Space-optimized approach
function climbStairsOptimized(n) {
  if (n <= 2) return n;
  
  let prev1 = 2;
  let prev2 = 1;
  
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}

module.exports = { climbStairs, climbStairsOptimized };
