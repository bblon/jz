/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 
 * 示例 1：
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 * 
 * 示例 2：
 * 输入：arr = [0,1,2,1], k = 1
 * 输出：[0]
 * 
 * 限制：
 * 0 <= k <= arr.length <= 10000
 * 0 <= arr[i] <= 10000
 */

 /**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  let topK = (l, r) => {
    if(l >= r) return;
    let t = arr[r-1];
    let i = l - 1;
    for(let j = l; j < r - 1; j++) {
      if(arr[j] <= t) {
        i++;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
    [arr[i+1], arr[r-1]] = [arr[r-1], arr[i+1]];
    if(i + 2 > k) {
      topK(l, i + 1);
    } else if(i + 2 < k) {
      topK(i + 2, r);
    }
    return arr.slice(0, k);
   }
   return topK(0, arr.length);
};