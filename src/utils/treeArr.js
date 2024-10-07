// 平铺数组转树
export function flatToTree(arr) {
  const treeArr = []
  const map = {}
  arr.forEach(item => {
    item.children = []
    map[item.type] = item
  })
  /* console.log(map)
     对arr进行循环，对每一个元素item，如果
     1.item有上级元素pItem,把item添加到pItem.children
     2.item没有上级元素(根据item.pid去找，找不到元素)，添加到treeArr
    */
  arr.forEach(item => {
    const pItem = map[item.type]
    // console.log(pItem);
    // console.log(item);
    if (pItem) {
      pItem.children.push(item)
    } else {
      treeArr.push(item)
    }
  })

  return treeArr
}