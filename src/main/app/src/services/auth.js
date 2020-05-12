const baseUrl = 'http://localhost:8080/auth/'

const login = ({ username, password }) => {
  const request = fetch(baseUrl, {
    method: 'GET',
    headers: { Authorization: 'Basic ' + btoa('username:password') }
  })

  request.then(result => {
    return result
  })
}

export default { login }
