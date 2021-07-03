/**
 * 数组中的数字出现次数2
 * @param {*} nums
 */
function singleNumber(nums) {
  let a = 0
  let b = 0
  for (let num of nums) {
    a = (a ^ num) & ~b
    b = (b ^ num) & ~a
  }
  return a
}
module.exports = singleNumber
