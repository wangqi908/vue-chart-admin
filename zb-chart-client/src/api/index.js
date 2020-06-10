import req from './http.js'

//用户数据
export const userPageReq = params => req('/user/page', params, 'post') //用户分页
export const userListReq = params => req('/user/list', params, 'post') //用户list
export const userInsertReq = params => req('/user/insert', params, 'post') //用户数据上传

//直播数据
export const zbPageReq = params => req('/zb/page', params, 'post') //直播分页
export const zbListReq = params => req('/zb/list', params, 'post') //直播list
export const zbInsertReq = params => req('/zb/insert', params, 'post') //直播数据上传

//图表
export const chartUserReq = () => req('/chart/user') //用户图表
