/**
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 * 
 * 示例 1:
 * 给定二叉树 [3,9,20,null,null,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回 true 。
 * 
 * 示例 2:
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *        1
 *       / \
 *      2   2
 *     / \
 *    3   3
 *   / \
 *  4   4
 * 返回 false 。
 * 
 * 限制：
 * 1 <= 树的结点个数 <= 10000
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let dfs = (root) => {
    if(!root) return 0;
    let depth1 = dfs(root.left);
    if(depth1 === -1) return -1;
    let depth2 = dfs(root.right);
    if(depth2 === -1) return -1;
    return Math.abs(depth1 - depth2) < 2 ? Math.max(depth1, depth2) + 1: -1;
  }
  return dfs(root) === -1;
};