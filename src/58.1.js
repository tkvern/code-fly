/**
 * 翻转单词顺序
 * @param {string} str
 */
function reverseWords(str) {
  return str
    .trim()
    .split(' ')
    .filter((item) => item)
    .reverse()
    .join(' ')
}

module.exports = reverseWords
