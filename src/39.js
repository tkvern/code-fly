/**
 * 数组中出现次数超过一半的数字
 * @param {*} nums
 */
function majorityElement(nums) {
  let cnt = 0
  let major = 0
  for (const num of nums) {
    if (cnt == 0) {
      major = num
      cnt = 1
    } else {
      cnt += major == num ? 1 : -1
    }
  }
  return major
}

module.exports = majorityElement
