const sameTypeToGrouping = (arr, key) => {
  let typeArr = []
  let resArr = []
  arr.forEach(ele => {
    typeArr.push(ele[key])
  })
  typeArr = typeArr.filter((item, index, typeArr) => {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return typeArr.indexOf(item, 0) === index
  })
  typeArr.forEach(element => {
    let group = []
    arr.forEach(ele => {
      if (ele[key] == element) {
        group.push(ele)
      }
    })
    resArr.push({
      [key]: element,
      group
    })
  })

  return resArr
}

const formatTime = (date, type) => {
  if (!date || date === '') return ''
  date = new Date(date * 1) //如果date为13位不需要乘1000

  const year = date.getFullYear()
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  if (type === 'all') {
    let res = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    return res
  } else if (type === 'YMD') {
    let res = `${year}/${month}/${day}`
    return res
  } else if (type === 'HMS') {
    let res = `${hours}:${minutes}:${seconds}`
    return res
  } else {
    return { year, month, day, hours, minutes, seconds }
  }
}

const deepCopy = obj => {
  const target = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    const element = obj[key]
    target[key] = typeof element === 'object' ? deepCopy(element) : element
  }
  return target
}

module.exports = {
  sameTypeToGrouping,
  formatTime,
  deepCopy
}
