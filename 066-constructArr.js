/**
 * 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
 * 
 * 示例:
 * 输入: [1,2,3,4,5]
 * 输出: [120,60,40,30,24]
 */

 /**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  let left = [1], right = [], res = [];
  right[a.length - 1] = 1;
  for(let i = 1; i < a.length; i++) {
    left[i] = left[i-1] * a[i-1];
  }
  for(let i = a.length - 2; i >= 0; i--) {
    right[i] = right[i+1] * a[i+1];
  }
  for(let i = 0; i < a.length; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
};