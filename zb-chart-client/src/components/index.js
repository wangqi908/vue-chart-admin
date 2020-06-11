export { default as Head } from './head'
export { default as Menu } from './menu'
import SearchBox from './SearchBox'

import MyPagination from './MyPagination'

export const components = Vue => {
  Vue.component('MyPagination', MyPagination)
  Vue.component('SearchBox', SearchBox)
}
