import axios from 'axios'
import { domain } from 'common/Constants'

export function callApiGet(path: string, headers: any, callback: any) {
  const url = domain + '/api' + path
  axios
    .get(url, {
      headers,
    })
    .then((res) => {
      callback(res)
    })
    .catch((e) => {
      console.log(e)
    })
}

export function callApiPost(
  path: string,
  headers: any,
  body: any,
  callback: any,
) {
  const url = domain + '/api' + path
  axios
    .post(url, body, {
      headers,
    })
    .then((res) => {
      callback(res)
    })
    .catch((e) => {
      console.log(e)
    })
}
