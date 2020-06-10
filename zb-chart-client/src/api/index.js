import req from './http.js'

export const userPageReq = params => req('/user/page', params, 'post') //用户分页
export const userInsertReq = params => req('/user/insert', params, 'post') //用户数据上传
