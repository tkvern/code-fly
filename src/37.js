const { Tree } = require('./base')

/**
 * 序列化二叉树
 * @param {*} root
 */
function serialize(root) {
  if (!root) return '[]'
  let queue = [root]
  let res = ''
  while (queue.length) {
    let node = queue.shift()
    if (node) {
      res += node.val + ','
      node.left !== null && queue.push(node.left)
      node.right !== null && queue.push(node.right)
    } else {
      res += 'null' + ','
    }
  }
  return `[${res.substring(0, res.length - 1)}]`
}

/**
 * 反序列化二叉树
 * @param {*} data
 */
function deserialize(data) {
  if (!data || data.length <= 2) return null
  let arr = data
    .substring(1, data.length - 1)
    .split(',')
    .map((item) => {
      if (item === 'null') {
        item = null
      } else if (!isNaN(+item)) {
        item = +item
      }
      return item
    })
  let root = new Tree(arr.shift())
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    let leftVal = arr.shift()
    if (leftVal !== undefined) {
      node.left = new Tree(leftVal)
      queue.push(node.left)
    }
    let rightVal = arr.shift()
    if (rightVal !== undefined) {
      node.right = new Tree(rightVal)
      queue.push(node.right)
    }
  }
  return root
}

module.exports = {
  serialize,
  deserialize,
}
