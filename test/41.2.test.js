const Solution = require('../src/41.2')

let solution = new Solution()
test('41.2 字符流中第一个不重复的字符 - 示例1', () => {
  expect(solution.findAppearingOnce()).toBe('#')
})
test('41.2 字符流中第一个不重复的字符 - 示例1', () => {
  solution.insert('g')
  expect(solution.findAppearingOnce()).toBe('g')
  solution.insert('o')
  expect(solution.findAppearingOnce()).toBe('g')
  solution.insert('o')
  solution.insert('g')
  solution.insert('l')
  solution.insert('e')
  expect(solution.findAppearingOnce()).toBe('l')
})
