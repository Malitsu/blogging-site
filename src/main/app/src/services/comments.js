const base64 = require('base-64')

const baseUrl = '/comments'

const getComments = () => {
  const request = fetch(baseUrl, {
    method: 'GET'
  })
  return request.then(jsonObject => jsonObject.json())
}

const deleteComment = (username, password, id) => {
  const request = fetch(baseUrl + '/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Basic ' + base64.encode(username + ':' + password)
    }
  })
  return request.then(data => data)
}

const createComment = (newComment) => {
  const request = fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  return request.then(data => data)
}

const updateComment = (id, newComment) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  const request = fetch(baseUrl + '/' + id, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(newComment)
  })
  return request.then(jsonObject => jsonObject.json())
}

export default { getComments, deleteComment, createComment, updateComment }
