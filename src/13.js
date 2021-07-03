/**
 * 机器人的运动范围
 * @param {number} m
 * @param {number} n
 * @param {number} k
 */
function movingCount(m, n, k) {
  let visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false))
  let ans = 0

  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      visited[i][j] ||
      (i.toString() + j.toString())
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b)) > k
    )
      return

    visited[i][j] = true
    ++ans

    dfs(i + 1, j)
    dfs(i, j + 1)
    dfs(i - 1, j)
    dfs(i, j - 1)
  }
  dfs(0, 0)
  return ans
}

module.exports = movingCount
