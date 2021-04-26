let reverseWords = require('../src/58.1')

test('58.1 翻转单词顺序 用例1', () => {
  let str = 'the sky is blue'
  expect(reverseWords(str)).toBe('blue is sky the')
})

test('58.1 翻转单词顺序 用例2', () => {
  let str = '  hello world!  '
  expect(reverseWords(str)).toBe('world! hello')
})

test('58.1 翻转单词顺序 用例3', () => {
  let str = 'a good   example'
  expect(reverseWords(str)).toBe('example good a')
})
