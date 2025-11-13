/**
 * Binary Tree Node
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Binary Search Tree Implementation
 * Difficulty: Advanced
 * 
 * A binary search tree is a tree data structure where:
 * - Each node has at most two children
 * - Left child contains values less than parent
 * - Right child contains values greater than parent
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // Insert a value
  insert(value) {
    const newNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
  
  // Search for a value
  search(value) {
    let current = this.root;
    
    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  
  // Inorder traversal (left, root, right)
  inorder(node = this.root, result = []) {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
    return result;
  }
  
  // Preorder traversal (root, left, right)
  preorder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
    return result;
  }
  
  // Postorder traversal (left, right, root)
  postorder(node = this.root, result = []) {
    if (node) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  }
}

module.exports = { TreeNode, BinarySearchTree };
