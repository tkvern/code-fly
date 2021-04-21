/**
 * 按顺时针打印矩阵
 * @param {*} matrix 矩阵(二维数组)
 */
function printMatrix(matrix) {
  let ret = []
  let r1 = 0 // 上起指针，加
  let r2 = matrix.length - 1 // 下起指针，减
  let c1 = 0 // 左起指针，加
  let c2 = matrix[0].length - 1 // 右起指针，减
  while (r1 <= r2 && c1 <= c2) {
    // 上
    for (let i = c1; i <= c2; i++) {
      ret.push(matrix[r1][i])
    }

    // 右
    for (let i = r1 + 1; i <= r2; i++) {
      ret.push(matrix[i][c2])
    }

    // 下
    if (r1 !== r2) {
      for (let i = c2 - 1; i >= c1; i--) {
        ret.push(matrix[r2][i])
      }
    }

    // 左
    if (c1 !== c2) {
      for (let i = r2 - 1; i > r1; i--) {
        ret.push(matrix[i][c1])
      }
    }

    r1++
    r2--
    c1++
    c2--
  }
  return ret.join(',')
}

module.exports = printMatrix
