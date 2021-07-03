/**
 * 二进制中 1 的个数
 * @param {number} n
 * @returns
 */
function hammingWeight(n) {
  let cnt = 0
  while (n) {
    cnt += n & 1
    n >>>= 1
  }
  return cnt
}

module.exports = hammingWeight
