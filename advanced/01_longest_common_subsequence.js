/**
 * Problem: Longest Common Subsequence (LCS)
 * Difficulty: Advanced
 * 
 * Description:
 * Given two strings, find the length of their longest common subsequence.
 * A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.
 * 
 * Example:
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" with length 3.
 * 
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * 
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 */

// Solution 1: Recursive (with memoization)
function longestCommonSubsequence1(text1, text2) {
  const memo = new Map();
  
  function lcs(i, j) {
    if (i >= text1.length || j >= text2.length) {
      return 0;
    }
    
    const key = `${i},${j}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    
    let result;
    if (text1[i] === text2[j]) {
      result = 1 + lcs(i + 1, j + 1);
    } else {
      result = Math.max(lcs(i + 1, j), lcs(i, j + 1));
    }
    
    memo.set(key, result);
    return result;
  }
  
  return lcs(0, 0);
}

// Solution 2: Dynamic Programming (Bottom-up)
function longestCommonSubsequence2(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  
  // Create DP table
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}

// Solution 3: Space-optimized DP (using only two rows)
function longestCommonSubsequence3(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  
  let prev = Array(n + 1).fill(0);
  let curr = Array(n + 1).fill(0);
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        curr[j] = prev[j - 1] + 1;
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    [prev, curr] = [curr, prev];
  }
  
  return prev[n];
}

// Test cases
console.log('Test Case 1:');
console.log(longestCommonSubsequence1("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence2("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence3("abcde", "ace")); // Expected: 3

console.log('\nTest Case 2:');
console.log(longestCommonSubsequence1("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence2("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence3("abc", "abc")); // Expected: 3

console.log('\nTest Case 3:');
console.log(longestCommonSubsequence1("abc", "def")); // Expected: 0
console.log(longestCommonSubsequence2("abc", "def")); // Expected: 0
console.log(longestCommonSubsequence3("abc", "def")); // Expected: 0

console.log('\nTest Case 4:');
console.log(longestCommonSubsequence1("AGGTAB", "GXTXAYB")); // Expected: 4 (GTAB)
console.log(longestCommonSubsequence2("AGGTAB", "GXTXAYB")); // Expected: 4
console.log(longestCommonSubsequence3("AGGTAB", "GXTXAYB")); // Expected: 4

// Time Complexity:
// Solution 1: O(m * n) with memoization
// Solution 2: O(m * n) - fills the entire DP table
// Solution 3: O(m * n) - same iterations, optimized space
//
// Space Complexity:
// Solution 1: O(m * n) - memoization map + recursion stack
// Solution 2: O(m * n) - DP table
// Solution 3: O(n) - only two rows of DP table
