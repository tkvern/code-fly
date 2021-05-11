/**
 * 打印从1到最大的n位数
 * @param {number} n
 */
function printNumber(n) {
  let res = []
  for (let i = 1; i < 10 ** n; i++) {
    res.push(i)
  }
  return res
}

module.exports = printNumber
