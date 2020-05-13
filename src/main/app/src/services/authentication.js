// import { createContext, useContext } from 'react'
const base64 = require('base-64')

const headers = new Headers()
const baseUrl = 'http://localhost:8080/auth'

const login = (username, password) => {
  headers.append('Authorization', 'Basic ' + base64.encode(username + ':' + password))
  const request = fetch(baseUrl, {
    method: 'GET',
    headers: headers
  })

  return request.then(result => result)
}

export default { login }
