/**
 * 二维数组中查找元素
 * @param {number} target 目标元素
 * @param {number[][]} matrix 矩阵(二维数组)
 * @returns
 */
function find(target, matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  let rows = matrix.length
  let cols = matrix[0].length
  let r = 0 // 行标
  let c = cols - 1 // 列标
  while (r <= rows - 1 && c >= 0) {
    if (target === matrix[r][c]) {
      return true
    } else if (target > matrix[r][c]) {
      r++
    } else {
      c--
    }
  }
  return false
}

module.exports = find
