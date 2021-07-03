const { TreeNode } = require('./base')

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
      queue.push(node.left)
      queue.push(node.right)
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
  let arr = data.substring(1, data.length - 1).split(',')
  let root = new TreeNode(arr.shift())
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    let leftVal = arr.shift()
    if (leftVal !== 'null' && leftVal !== undefined) {
      node.left = new TreeNode(leftVal)
      queue.push(node.left)
    }
    let rightVal = arr.shift()
    if (rightVal !== 'null' && rightVal !== undefined) {
      node.right = new TreeNode(rightVal)
      queue.push(node.right)
    }
  }
  return root
}

module.exports = {
  serialize,
  deserialize,
}
