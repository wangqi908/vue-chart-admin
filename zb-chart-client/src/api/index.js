import req from './http.js'

export const userPageReq = params => req('/user/page', params, 'post') //用户分页
export const userInsertReq = params => req('/user/insert', params, 'post') //用户数据上传

export const zbPageReq = params => req('/zb/page', params, 'post') //直播分页
export const zbInsertReq = params => req('/zb/insert', params, 'post') //直播数据上传
