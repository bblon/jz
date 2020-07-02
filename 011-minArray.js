/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
 * 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  
 * 
 * 示例 1：
 * 输入：[3,4,5,1,2]
 * 输出：1
 * 
 * 示例 2：
 * 输入：[2,2,2,0,1]
 * 输出：0
 */

 /**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(nums) {
  let findMin = (l, r) => {
    if(l === r) return nums[l];
    let mid = ~~((l + r) / 2);
    if(nums[mid] < nums[r]) {
      return findMin(l ,mid);
    } else if(nums[mid] > nums[r]) {
      console.log(mid, r, 111)
      return findMin(mid + 1, r);
    } else {
      return findMin(l, r - 1);
    }
  }
  return findMin(0, nums.length - 1);
};