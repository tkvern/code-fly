/**
 * 二叉树
 * @param {*} val
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 中序构建平衡二叉树
 * @param {number[]} nums
 * @returns
 */
function sortedArrayToBST(nums) {
  function createBalance(start, end) {
    if (start > end) return null
    let mid = Math.floor((start + end) / 2)
    let root = new TreeNode(nums[mid])
    root.left = createBalance(start, mid - 1)
    root.right = createBalance(mid + 1, end)
    return root
  }
  return createBalance(0, nums.length - 1)
}

function createTree(nums) {
  let list = []
  for (let i = 0; i < nums.length; i++) {
    let node = new TreeNode(nums[i])
    list.push(node)
  }
  if (list.length > 0) {
    for (let i = 0; i < nums.length / 2 - 1; i++) {
      if (list[2 * i + 1] !== null) {
        list[i].left = list[2 * i + 1]
      }
      if (list[2 * i + 2] !== null) {
        list[i].right = list[2 * i + 2]
      }
    }
  }
  return list[0]
}

function printTree(node) {
  if (node !== null) {
    console.log(node.val)
    printTree(node.left)
    printTree(node.right)
  }
}

/**
 * 链表节点
 * @param {*} value
 */
function Node(value) {
  this.value = value
  this.next = null
}

/**
 * 链表
 */
function NodeList() {
  this.head = null
  this.length = 0
}

module.exports = {
  TreeNode,
  Node,
  NodeList,
  sortedArrayToBST,
  createTree,
  printTree,
}
