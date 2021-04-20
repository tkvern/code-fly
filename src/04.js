/**
 *
 * @param {*} target 目标元素
 * @param {*} matrix 矩阵(二维数组)
 * @returns
 */
function find(target, matrix) {
  console.log(matrix)
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  let rows = matrix.length
  let cols = matrix[0].length
  let r = 0
  let c = cols - 1
  while (r <= rows - 1 && c >= 0) {
    if (target == matrix[r][c]) {
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
