/**
 * 滑动窗口的最大值
 * @param {number[]} nums 数组
 * @param {number} k 窗口长度
 */
function maxSlidingWindow(nums, k) {
  if (!nums.length || !k) return []
  if (k === 1) return nums
  let res = []
  let tempMax = -Infinity
  let len = nums.length
  let wind = []
  for (let i = 0; i < k; i++) {
    if (nums[i] > tempMax) {
      tempMax = nums[i]
    }
    wind.push(nums[i])
  }
  res.push(tempMax)

  for (let i = k; i < len; i++) {
    let a = wind.shift()
    wind.push(nums[i])
    if (nums[i] > tempMax) {
      tempMax = nums[i]
    } else if (a === tempMax) {
      tempMax = Math.max(...wind)
    }
    res.push(tempMax)
  }
  return res
}

module.exports = maxSlidingWindow
