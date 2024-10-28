import service from '@/service/index.js'

export function registerAccount(data) {
  return service({
    url: '/api/register',
    method: 'post',
    data,
  })
}
export function loginAccount(data) {
  return service({
    url: '/api/login',
    method: 'post',
    data,
  })
}

export function getList(data) {
  return service({
    url: '/api/getList',
    method: 'get',
    params: data,
  })
}
