let exist = require('../src/12')

test('12 矩阵中的路径 - 用例1', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  const word = 'ABCCED'
  expect(exist(board, word)).toBe(true)
})

test('12 矩阵中的路径 - 用例2', () => {
  const board = [
    ['a', 'b'],
    ['c', 'd'],
  ]
  const word = 'abcd'
  expect(exist(board, word)).toBe(false)
})
