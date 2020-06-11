import req from './http.js'

//用户数据
export const userPageReq = params => req('/user/page', params, 'post') //用户分页
export const userListReq = params => req('/user/list', params, 'post') //用户list
export const userViewReq = params => req('/user/view', params, 'post') //用户详情
export const userInsertReq = params => req('/user/insert', params, 'post') //用户数据上传

//直播数据
export const zbPageReq = params => req('/zb/page', params, 'post') //直播数据分页
export const zbListReq = params => req('/zb/list', params, 'post') //直播数据list
export const zbViewReq = params => req('/zb/view', params, 'post') //直播数据详情
export const zbInsertReq = params => req('/zb/insert', params, 'post') //直播数据上传

//图表
export const chartUserReq = () => req('/chart/user') //用户图表
export const chartZbReq = params => req('/chart/zb', params, 'post') //直播图表
