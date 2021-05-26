const { createTree, levelOrderTree } = require('./base')

/**
 * 序列化二叉树
 * @param {*} root
 */
function serialize(root) {
  if (!root) return '[]'
  return `[${levelOrderTree(root)
    .reduce((pre, current) => pre.concat(current), [])
    .map((item) => {
      if (item === null) {
        item = 'null'
      }
      return item
    })
    .join(',')}]`
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
  return createTree(arr)
}

module.exports = {
  serialize,
  deserialize,
}
