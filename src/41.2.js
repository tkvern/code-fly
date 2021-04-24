let Solution = function () {
  this.chars = []
  this.map = {}
}

Solution.prototype.insert = function (char) {
  this.chars.push(char)
  if (this.map[char]) {
    this.map[char]++
  } else {
    this.map[char] = 1
  }
}

Solution.prototype.findAppearingOnce = function () {
  for (let char of this.chars) {
    if (this.map[char] === 1) {
      return char
    }
  }
  return '#'
}

module.exports = Solution
