import axios from 'axios'
import store from '../vuex/store'
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.adminer !== '') {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.adminer}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// dev
let base = '/learn'
// // build
// let base = ''
// 后台登录接口
export const AdminLogin = params => {
  return axios.get(`${base}/admin/login`, {params: params})
}
// 添加管理员接口
export const NewAdminer = params => {
  return axios.post(`${base}/admin/newadminer`, params)
}
// 获取管理员
export const GetAdminer = params => {
  return axios.get(`${base}/admin/getadminer`, {params: params})
}
// 修改管理员
export const EditAdminer = params => {
  return axios.post(`${base}/admin/editadminer`, params)
}
