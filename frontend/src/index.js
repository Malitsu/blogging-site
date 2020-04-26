/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import './index.css'

const Postbody = ({ body, visibility }) => {
  // console.log(visibility)
  return (visibility ? <p>{body}</p> : <p></p>)
}

const Post = ({ post, setVisibility, deletePost }) => {
  const showPost = () => {
    setVisibility(post.id)
  }

  const deleteClick = () => {
    deletePost(post.id)
  }

  return (
    <li>
      <span onClick={showPost}>{post.title} </span>
      <button onClick={deleteClick}>delete</button>
      <Postbody
        body={post.body}
        visibility={post.visibility}
      />
    </li>
  )
}

const Posts = ({ posts, setVisibility, deletePost }) => {
  const rows = () => posts.map(post =>
    <Post
      key={post.id}
      post={post}
      setVisibility={setVisibility}
      deletePost={deletePost}
    />
  )

  return (
    <ul>
      {rows()}
    </ul>
  )
}

const PostForm = ({ addPost, newTitle, newBody, handleTitleChange, handleBodyChange }) => {
  return (
    <form onSubmit={addPost}>
      <div>title: <input value={newTitle} onChange={handleTitleChange} /></div>
      <div>body: <input value={newBody} onChange={handleBodyChange} /></div>
      <button type="submit">post</button>
    </form>
  )
}

const App = () => {
  /* useEffect(() => {
    const postArr =
    setPosts(postArr)
  }, []) */

  const [posts, setPosts] = useState([{ id: 0, title: 'Heippa', body: 'Ken söi kesävoin?', visibility: false },
    { id: 1, title: 'Moikka', body: 'No en ainakaan mää.', visibility: false },
    { id: 2, title: 'Terve', body: 'Se oli varmaan Pertti', visibility: false }])

  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleBodyChange = (event) => {
    setNewBody(event.target.value)
  }

  const setVisibility = (id) => {
    const match = posts.filter(p => p.id === id)
    match[0].visibility = !match[0].visibility
    const copyArr = posts.map(p => p.id === id ? match[0] : p)
    setPosts(copyArr)
  }

  const deletePost = (id) => {
    const copyArr = posts.filter(post => post.id !== id)
    setPosts(copyArr)
  }

  const addPost = (event) => {
    event.preventDefault()
    const copyArr = [...posts]
    const id = copyArr.length
    copyArr.push({ id: id, title: newTitle, body: newBody, visibility: false })
    setPosts(copyArr)
    console.log(posts)
  }

  return (
    <div>
      <h1>Blogging Site</h1>
      <h2>Posts</h2>
      <div>
        <Posts
          posts={posts}
          setVisibility={setVisibility}
          deletePost={deletePost}
        />
        <PostForm
          addPost={addPost}
          newTitle={newTitle}
          newBody={newBody}
          handleTitleChange={handleTitleChange}
          handleBodyChange={handleBodyChange}
        />
      </div>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
