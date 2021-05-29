/**
 * 缺失的数字
 * @param {*} nums
 */
function missingNumber(nums) {
  if (!nums || !nums.length) return 0
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = left + ~~((right - left) / 2)
    if (nums[mid] !== mid) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return nums[left] === left ? nums.length : left
}

module.exports = missingNumber
