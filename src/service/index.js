import axios from 'axios'
// 使用库提供的默认配置创建实例
// 此时超时配置的默认值是 `0`
const instance = axios.create({
  baseURL: '',
  timeout: 1000 * 60,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    // debugger
    const token = localStorage.getItem('s-token')

    if (token) {
      config.headers = { 's-Token': token }
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if(response.status === 200){
        return response.data
    }
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default instance
