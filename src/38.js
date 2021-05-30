/**
 * 字符串的排列
 * @param {*} s
 */
function permutation(s) {
  let len = s.length
  let res = new Set()
  function dfs(str, isRead) {
    if (str.length === len) {
      res.add(str)
      return
    }
    for (let i = 0; i < len; i++) {
      if (isRead[i]) continue
      isRead[i] = 1
      dfs(str.concat(s[i]), isRead)
      isRead[i] = 0
    }
  }
  dfs('', {})
  return [...res]
}

module.exports = permutation
