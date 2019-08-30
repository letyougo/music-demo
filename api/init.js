import request from '../config/request'

export const getInitData = params => request.get('/init', {params})
