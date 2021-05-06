/**
 * 矩阵中的路径
 * @param {string[][]} board
 * @param {string} word
 */
function exist(board, word) {
  let yLength = board.length
  let xLength = board[0].length

  let k = 0

  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {
      if (findWord(x, y, k)) return true
    }
  }
  return false

  function findWord(x, y, k) {
    if (
      x < 0 ||
      y < 0 ||
      y > yLength - 1 ||
      x > xLength - 1 ||
      board[y][x] !== word[k]
    ) {
      return false
    }
    if (k === word.length - 1) return true

    let temp = board[y][x]
    board[y][x] = 0
    let res =
      findWord(x, y - 1, k + 1) ||
      findWord(x + 1, y, k + 1) ||
      findWord(x, y + 1, k + 1) ||
      findWord(x - 1, y, k + 1)
    board[y][x] = temp
    return res
  }
}

module.exports = exist
