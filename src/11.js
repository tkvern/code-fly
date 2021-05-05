/**
 * 旋转数组最小的数字
 * @param {number[]} numbers
 */
function minArray(numbers) {
  let left = 0,
    right = numbers.length - 1
  while (left < right) {
    let mid = (left + right) >>> 1
    if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] < numbers[right]) {
      right = mid
    } else {
      right--
    }
  }
  return numbers[left]
}
module.exports = minArray
