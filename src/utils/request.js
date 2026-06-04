// import axios from 'axios'

// // 我给你的免费真实接口地址（可用到你学会为止）
// const request = axios.create({
//   baseURL: 'https://note.iconsumi.com/api',
//   timeout: 10000
// })

// // 请求拦截：自动带token
// request.interceptors.request.use(config => {
//   const token = localStorage.getItem('adminToken')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

// // 响应处理
// request.interceptors.response.use(res => {
//   return res.data
// }, err => {
//   alert('请求出错：' + (err.response?.data?.msg || '网络错误'))
//   return Promise.reject(err)
// })

// export default request