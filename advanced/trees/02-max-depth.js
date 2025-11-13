/**
 * Problem: Maximum Depth of Binary Tree
 * Difficulty: Advanced
 * 
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 * 
 * Example:
 * Input:     3
 *           / \
 *          9  20
 *            /  \
 *           15   7
 * Output: 3
 */

const { TreeNode } = require('./01-binary-search-tree');

function maxDepth(root) {
  if (!root) return 0;
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}

// Iterative approach using level-order traversal
function maxDepthIterative(root) {
  if (!root) return 0;
  
  const queue = [root];
  let depth = 0;
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }
  
  return depth;
}

module.exports = { maxDepth, maxDepthIterative };
