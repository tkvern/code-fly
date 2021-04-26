/**
 * 左旋转字符串
 * @param {string} str
 * @param {number} k
 */
function reverseLeftWords(str, k) {
  return str.substring(k) + str.substr(0, k)
}

module.exports = reverseLeftWords
