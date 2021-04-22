const replaceSpace = require('../src/05')

test('05 替换空格', () => {
  const params = 'A B'
  expect(replaceSpace(params)).toBe('A%20B')
})
