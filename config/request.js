import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

request.interceptors.request.use(req => {
  return req
})

request.interceptors.response.use(res => {
  let {
    status,
    data,
    message
  } = res.data

  if(status !== 200) {
    alert(message)
  }


  return res.data
})


export default request
