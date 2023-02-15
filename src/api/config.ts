import axios  from'axios'


const instance = axios.create({
    baseURL:'https://financial.tongweichain.com',
    
})


export function post(url:string, data = {} ) {
    let params = Object.assign(data);
    return new Promise((resolve, reject) => {
      instance.post(url, params)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
    })
  }
  
  // get方法
  export function get(url:string, data = {} ) {
    let params = Object.assign(data);
    return new Promise((resolve, reject) => {
      instance.get(url, params)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
    })
  }