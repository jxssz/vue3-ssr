import _axios from 'axios'
// const BASE = 'https://jxihub.cn:8080'
// const BASE = 'https://127.0.0.1:8080'
const axios = async function (config) {
  return await _axios({
    baseURL: 'https://api.jxihub.cn/',
    url: config.url,
    method: config.method,
    params: config.params
  })
}
export { axios }