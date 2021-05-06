/**
 * 剪绳子
 * @param {number} n
 * @returns {number}
 */
function cuttingRope(n) {
  if (n <= 3) return n - 1
  let a = ~~(n / 3)
  let b = n % 3
  if (b === 1) {
    return 3 ** (a - 1) * 2 * 2
  }
  if (b === 0) {
    return 3 ** a
  }
  return 3 ** a * b
}

module.exports = cuttingRope
