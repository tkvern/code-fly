/**
 * 把数组排成最小的
 * @param {*} nums
 */
function minNumber(nums) {
  nums.sort((a, b) => {
    let s1 = a + '' + b
    let s2 = b + '' + a
    if (s1 < s2) {
      return -1
    } else {
      return 1
    }
  })
  return nums.join('')
}

module.exports = minNumber
