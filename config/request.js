import axios from 'axios'
import store from '../store'

const WHITE_LIST = [
	'/music/getRecommendMusic',
	'/music/getGroupMusic',
	'/user/getUserDetail'
]

const request = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

request.interceptors.request.use(req => {
	if(WHITE_LIST.includes(req.url)){
		return req
	}
	if(!store.user.isLogin) {
		location.href = '//music.163.com/m/login?redirect_url=https%3A%2F%2Fmusic.163.com%2Fst%2Fdifm'
	}
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
},(e) => {
  return Promise.reject(e)
})


export default request
