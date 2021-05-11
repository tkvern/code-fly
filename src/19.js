/**
 * 正则表达式匹配
 * @param {string} s 字符串
 * @param {string} p 正则
 */
function isMatch(s, p) {
  let memo = {}
  function recursive(i, j) {
    if (memo[[i, j]] !== undefined) return memo[[i, j]]
    if (j === p.length) return i === s.length
    let tmp = i < s.length && (s[i] === p[j] || p[j] === '.')
    let ans = false
    if (p[j + 1] === '*') {
      ans = recursive(i, j + 2) || (tmp && recursive(i + 1, j))
    } else {
      ans = tmp && recursive(i + 1, j + 1)
    }
    memo[[i, j]] = ans
    return ans
  }
  return recursive(0, 0)
}

module.exports = isMatch
