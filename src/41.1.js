/**
 * 数据流中的中位数
 */
let MedianFinder = function () {
  this.val = []
}

/**
 * 添加元素
 * @param {number} num
 */
MedianFinder.prototype.addNum = function (num) {
  let left = 0
  let right = this.val.length
  while (left < right) {
    let mid = left + ~~((right - left) / 2)
    if (num > this.val[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  this.val.splice(left, 0, num)
}

/**
 * 查找中位数
 * @returns {number}
 */
MedianFinder.prototype.findMedian = function () {
  let mid = ~~(this.val.length / 2)
  return this.val.length % 2
    ? this.val[mid]
    : (this.val[mid - 1] + this.val[mid]) / 2
}

module.exports = MedianFinder
