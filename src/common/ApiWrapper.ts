import axios from 'axios'
import { domain } from 'common/Constants'

export const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'desolate-gorge-20881.herokuapp.com',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
}

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

export function callApiPut(
  path: string,
  headers: any,
  body: any,
  callback: any,
) {
  const url = domain + '/api' + path
  axios
    .put(url, body, {
      headers,
    })
    .then((res) => {
      callback(res)
    })
    .catch((e) => {
      console.log(e)
    })
}

export function callApiDelete(path: string, headers: any, callback: any) {
  const url = domain + '/api' + path
  axios
    .delete(url, {
      headers,
    })
    .then((res) => {
      callback(res)
    })
    .catch((e) => {
      console.log(e)
    })
}
