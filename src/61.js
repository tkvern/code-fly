/**
 * 是否能组成顺子
 * @param {*} nums
 */
function isContinuous(nums) {
  if (nums.length < 5) return false
  nums.sort((a, b) => a - b)
  let cnt = 0
  for (let num of nums) {
    if (num === 0) {
      cnt++
    }
  }
  for (let i = cnt; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i]) {
      return false
    }
    cnt -= nums[i + 1] - nums[i] - 1
  }
  return cnt >= 0
}

module.exports = isContinuous
