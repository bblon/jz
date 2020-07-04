/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * 
 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 示例 2：
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 限制：
 * 0 <= matrix.length <= 100
 * 0 <= matrix[i].length <= 100
 */

 /**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix.length) return [];
  let t = 0, r = matrix[0].length - 1, b = matrix.length - 1, l = 0;
  let res = [];
  while(true) {
    for(let i = l; i <= r; i++) res.push(matrix[t][i]);
    t++;
    if(t > b) break;
    for(let i = t; i <= b; i++) res.push(matrix[i][r]);
    r--;
    if(r < l) break;
    for(let i = r; i >= l; i--) res.push(matrix[b][i]);
    b--;
    if(b < t) break;
    for(let i = b; i >= t; i--) res.push(matrix[i][l]);
    l++;
    if(l > r) break;
  }
  return res;
};