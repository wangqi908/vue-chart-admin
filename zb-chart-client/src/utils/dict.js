import store from '@/store'
const propList = store.state.propList || []
// 文章类别
export const getPostTypeArr = () => {
  let postTypeArr = propList.filter(ele => ele.type === 'post') || []
  return postTypeArr
}
