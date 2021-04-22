/**
 * 数组中重复的数字
 * @param {number[]} nums
 */
function duplicate(nums) {
  let m = {}
  for (let num of nums) {
    if (m[num]) return num
    m[num] = 1
  }
  return -1
}

module.exports = duplicate
