import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
  // api 的 base_url
  baseURL: '/api',
  // 请求超时时间
  timeout: 60000
})

// request拦截器
service.interceptors.request.use(
  config => {
    // ajax判断(勿改)
    config.headers['x-requested-with'] = 'XMLHttpRequest'
    // 针对json格式提交的参数不做处理
    if (config.method === 'post' && config.headers['Content-Type'] !== 'application/json') {
      config.data = qs.stringify(config.data, { arrayFormat: 'indices', allowDots: true })
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const headers = response.headers
    if (headers['content-type'] === 'application/octet-stream;charset=UTF-8') {
      return response
    }
    const res = response.data
    if (res.code !== 1) {
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = error.response.headers.loginurl
        return
      }
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

const ajax = {}

ajax.get = (url, data) => {
  return service({
    method: 'get',
    url,
    params: data
  })
}

ajax.post = (url, data) => {
  return service.post(url, data)
}
/**
 * axios下载文件
 * @param url
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
ajax.downLoad = (url, data) => {
  return service({
    method: 'post',
    url: url,
    data: data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    const response = res.data
    const headers = res.headers
    if (!response) {
      return
    }
    const url = window.URL.createObjectURL(new Blob([response]))
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', decodeURIComponent(headers['filename']))
    document.body.appendChild(link)
    link.click()
  })
}

export default ajax
