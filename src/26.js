function isSubStructure(a, b) {
  function sub(a, b) {
    if (!b) return true
    if (!a) return false
    return a.val == b.val && sub(a.left, b.left) && sub(a.right, b.right)
  }

  if (!b || !a) return false
  if (a.val != b.val) {
    return isSubStructure(a.left, b) || isSubStructure(a.right, b)
  }
  return sub(a, b) || isSubStructure(a.left, b) || isSubStructure(a.right, b)
}

module.exports = isSubStructure
