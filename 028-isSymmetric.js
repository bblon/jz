/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 *   1
 *  / \
 *  2   2
 *   \   \
 *    3    3
 * 
 * 示例 1：
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 示例 2：
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 限制：
 * 0 <= 节点个数 <= 1000
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
var isSymmetric = function(root) {

  let isSame = (node1, node2) => {
    if(!node1 && !node2) return true;
    if(!node1 || !node2 || node1.val !== node2.val) return false;
    return isSame(node1.left, node2.right) && isSame(node1.right, node2.left) ;
  }
 
  return !root || isSame(root.left, root.right);
};