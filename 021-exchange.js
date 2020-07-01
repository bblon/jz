/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 * 
 * 示例：
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 * 
 * 提示：
 * 1 <= nums.length <= 50000
 * 1 <= nums[i] <= 10000
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let i = -1;
  for(j = 0; j < nums.length; j++) {
    if(nums[j] & 1) {
      i++;
      [nums[j], nums[i]] = [nums[i], nums[j]];
    }
  }
};