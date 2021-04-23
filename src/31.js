/**
 * 栈的压入、弹出
 * @param {number[]} pushed 压栈序列
 * @param {number[]} popped 弹出序列
 */
function validateStackSequences(pushed, popped) {
  let s = []
  let q = 0
  for (let num of pushed) {
    s.push(num)
    while (s.length > 0 && s[s.length - 1] === popped[q]) {
      ++q
      s.pop()
    }
  }
  return s.length === 0
}

module.exports = validateStackSequences
