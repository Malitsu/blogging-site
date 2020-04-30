const baseUrl = 'http://localhost:8080/blogposts/'

const getPosts = () => {
  const request = fetch(baseUrl, {
    method: 'GET'
  })
  return request.then(jsonObject => jsonObject.json())
}

const deletePost = (id) => {
  const request = fetch(baseUrl + id, {
    method: 'DELETE'
  })
  return request.then(jsonObject => jsonObject.json())
}

const addPost = (newPost) => {
  const request = fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  return request.then(jsonObject => jsonObject.json())
}

const updatePost = (id, newPost) => {
  const request = fetch(baseUrl + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  return request.then(jsonObject => jsonObject.json())
}

export default { getPosts, deletePost, addPost, updatePost }
