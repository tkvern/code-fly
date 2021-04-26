let reverseLeftWords = require('../src/58.2')

test('58.2 左旋转字符串 用例1', () => {
  let str = 'abcdefg'
  let k = 2
  expect(reverseLeftWords(str, k)).toBe('cdefgab')
})

test('58.2 左旋转字符串 用例2', () => {
  let str = 'lrloseumgh'
  let k = 6
  expect(reverseLeftWords(str, k)).toBe('umghlrlose')
})

test('58.2 左旋转字符串 用例3', () => {
  let str = 'abcXYZdef'
  let k = 3
  expect(reverseLeftWords(str, k)).toBe('XYZdefabc')
})

test('58.2 左旋转字符串 用例4', () => {
  let str = 'abcXYZdef'
  let k = 10
  expect(reverseLeftWords(str, k)).toBe('abcXYZdef')
})
