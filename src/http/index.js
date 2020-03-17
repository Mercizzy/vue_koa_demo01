//引入axios
import axios from 'axios'

axios.defaults.baseURL = baseConfig().SERVERROOT
//设置默认请求头
axios.defaults.timeout = 10000

function unit(response, resolve, reject) {
  if (response && response.status == 200 && response.data.code == 200) {
    resolve(response.data)
  } else if (response && response.status == 200) {
    switch (response.data.code) {
      case 403:
        // 在其他设备登录
        localStorage.clear();
        router.push({
          name: 'login'
        })
        break;
      default:
        reject(response.data)
    }
  } else if (response && response.status == 403) {
    let res = JSON.parse(response.response)
    switch (res.code) {
      case 403:
        // 在其他设备登录
        reject(res)
        router.push('/login')
        break;
    }
  } else if (response.readyState == 4) {
    let res = JSON.parse(response.response)
    response.message = res.message;
    reject(response)
  }
}


export default {
  http(params) {
    let header = params.headers == undefined ? JSON.parse(localStorage.getItem('headers') || '{}') : params.headers;
    
    if (params.isForm) {
      header['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    } else {
      header['Content-Type'] = 'application/json;charset-UTF-8'
    }
    return new Promise((resolve, reject) => {
      axios({
        url: params.url + "?randomtime=" + (new Date()).getTime(),
        method: params.method || 'get',
        params: params.query, //get参数
        // data: params.isForm?params.body:JSON.stringify(params.body), //post参数
        data: params.body,
        // headers: header,
        withCredentials: true,
        timeout: params.timeout == undefined ? 30000 : params.timeout,
        responseType: params.responseType == undefined ? null : params.responseType,
        validateStatus: function (status) {
          return status == 200
        },
        transformRequest: params.isForm ? [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret;
        }] : [
            (data, headers) => (data),
            ...axios.defaults.transformRequest
          ]
      }).then((response) => {
        unit(response, resolve, reject)
      }, (error) => {
        unit(error.request, resolve, reject)
      }).catch((error) => {
      })
    })

  }
}