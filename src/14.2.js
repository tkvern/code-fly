/**
 * 剪绳子2
 * @param {number} n
 * @returns {number}
 */
function cuttingRope(n) {
  if (n <= 3) return n - 1
  let a = ~~(n / 3)
  let b = n % 3
  let MOD = 1e9 + 7
  if (b === 1) {
    return (3 ** (a - 1) * 2 * 2) % MOD
  }
  if (b === 0) {
    return 3 ** a % MOD
  }
  return (3 ** a * b) % MOD
}

module.exports = cuttingRope
