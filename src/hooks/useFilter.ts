// 根据条件 动态筛选
function filterSongerByTags(data: any[], filterTags: any) {
  // 判断每一个标签组
  return data.filter(item => {  // boolean
    // 是否全部包含 特点条件
    return filterTags.every((val: any) => {
      // 如果标签为 `全部`，则不需要查找，直接返回该条数据
      if(val === '全部') return true

      return item.tags.includes(val)
    })
  })
}

export default filterSongerByTags