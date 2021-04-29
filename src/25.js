function sortMerge(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.value <= list2.value) {
    list1.next = sortMerge(list1.next, list2)
    return list1
  } else {
    list2.next = sortMerge(list1, list2.next)
    return list2
  }
}

module.exports = sortMerge
