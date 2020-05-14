const base64 = require('base-64')

const baseUrl = '/blogposts'

const getPosts = () => {
  const request = fetch(baseUrl, {
    method: 'GET'
  })
  return request.then(jsonObject => jsonObject.json())
}

const deletePost = (username, password, id) => {
  const request = fetch(baseUrl + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Basic ' + base64.encode(username + ':' + password)
    }
  })
  return request.then(data => data)
}

const createPost = (username, password, newPost) => {
  const request = fetch(baseUrl, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + base64.encode(username + ':' + password),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  return request.then(data => data)
}

const updatePost = (username, password, id, newPost) => {
  const headers = new Headers()
  headers.append('Authorization', 'Basic ' + base64.encode(username + ':' + password))
  headers.append('Content-Type', 'application/json')
  const request = fetch(baseUrl + '/' + id, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(newPost)
  })
  return request.then(jsonObject => jsonObject.json())
}

export default { getPosts, deletePost, createPost, updatePost }
