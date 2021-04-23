/**
 * 快速排序
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

/**
 * 查找最小的k个数
 * @param {number[]} arr
 * @param {number} k
 */
function findKithSmallest(arr, k) {
  return quickSort(arr).slice(0, k)
}

module.exports = findKithSmallest
