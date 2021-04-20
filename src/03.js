/**
 * 数组中重复的数字
 * @param {number[]} nums
 */
function duplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i]
      }
      swap(nums, i, nums[i])
    }
    swap(nums, i, nums[i])
  }
  return -1
}

/**
 * 交换元素位置
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 */
function swap(nums, i, j) {
  let t = nums[i]
  nums[i] = nums[j]
  nums[j] = t
}

module.exports = duplicate
