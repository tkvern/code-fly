function isNumber(str) {
  return str !== ' ' && !isNaN(+str)
}

module.exports = isNumber
