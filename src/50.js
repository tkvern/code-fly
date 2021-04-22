/**
 * 第一个只出现一次的字符
 * @param {string} str 字符串
 */
function firstNotRepeatingChar(str) {
  let map = {}
  let strArray = str.split('')
  for (let s of strArray) {
    if (map[s]) {
      map[s]++
    } else {
      map[s] = 1
    }
  }
  for (let i = 0; i < strArray.length; i++) {
    if (map[strArray[i]] === 1) return str[i]
  }
  return ' '
}

module.exports = firstNotRepeatingChar
