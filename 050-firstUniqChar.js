/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * 
 * 示例:
 * s = "abaccdeff"
 * 返回 "b"
 * 
 * s = "" 
 * 返回 " "
 * 
 * 限制：
 * 0 <= s 的长度 <= 50000
 */

 /**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = {};
  for(let i = 0; i < s.length; i++) {
    let k = s[i];
    map[k] = k in map ? false : true;
  }
  return Object.keys(map).find(item => map[item]) || ' '
};