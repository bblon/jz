/**
 * 统计一个数字在排序数组中出现的次数。
 * 
 * 示例 1:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: 2
 * 
 * 示例 2:
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: 0
 * 
 * 限制：
 * 0 <= 数组长度 <= 50000
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let findRight = (target) => {
    let i = 0, j = nums.length - 1;
    while(i <= j) {
      let m = ~~((i + j) / 2);
      if(nums[m] > target) {
        j = m - 1;
      } else {
        i = m + 1;
      }
    }
    return j;
  };
  return findRight(target) - findRight(target - 1);
};