/**
 * 最长不含重复的子字符串长度
 * @param {*} s
 */
function maxLongestSubstring(s) {
  let dic = {}
  let i = -1
  let res = 0
  for (let j = 0; j < s.length; j++) {
    if (dic[s[j]] !== undefined) {
      i = Math.max(i, dic[s[j]])
    }
    dic[s[j]] = j
    res = Math.max(res, j - i)
  }
  return res
}
module.exports = maxLongestSubstring
