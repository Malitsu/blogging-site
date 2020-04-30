/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import postService from './services/posts'
import './index.css'

const Postbody = ({ post, visibility, modifyPost }) => {
  const modifyClick = () => {
    modifyPost(post.id)
  }

  return (visibility
    ? <div>
      <p>{post.writer} {post.time.toString()}</p>
      <p>{post.body}</p>
      <p><button onClick={modifyClick}>modify</button></p>
    </div>
    : <p></p>)
}

const Post = ({ post, setVisibility, deletePost, modifyPost }) => {
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
        post={post}
        visibility={post.visibility}
        modifyPost={modifyPost}
      />
    </li>
  )
}

const Posts = ({ posts, setVisibility, deletePost, modifyPost }) => {
  const rows = () => posts.map(post =>
    <Post
      key={post.id}
      post={post}
      setVisibility={setVisibility}
      deletePost={deletePost}
      modifyPost={modifyPost}
    />
  )

  return (
    <ul>
      {rows()}
    </ul>
  )
}

const PostForm = ({ addPost, newTitle, newBody, newWriter, handleTitleChange, handleWriterChange, handleBodyChange }) => {
  return (
    <form onSubmit={addPost}>
      <div>title: <input value={newTitle} onChange={handleTitleChange} /></div>
      <div>writer: <input value={newWriter} onChange={handleWriterChange} /></div>
      <div>body: <input value={newBody} onChange={handleBodyChange} /></div>
      <button type="submit">post</button>
    </form>
  )
}

const App = () => {
  useEffect(() => {
    postService
      .getPosts()
      .then(initialPosts => {
        setPosts(initialPosts)
        console.log(initialPosts)
      })
  }, [])

  const [posts, setPosts] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newWriter, setNewWriter] = useState('')
  const [newBody, setNewBody] = useState('')
  const [newId, setNewId] = useState(posts.length)

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleWriterChange = (event) => {
    setNewWriter(event.target.value)
  }

  const handleBodyChange = (event) => {
    setNewBody(event.target.value)
  }

  const handleUpdate = (answer) => {
    // console.log(answer)
    postService
      .getPosts()
      .then(initialPosts => {
        setPosts(initialPosts)
      })
  }

  const setVisibility = (id) => {
    const match = posts.filter(post => post.id === id)
    match[0].visibility = !match[0].visibility
    const copyArr = posts.map(post => post.id === id ? match[0] : post)
    setPosts(copyArr)
  }

  const deletePost = (id) => {
    postService
      .deletePost(id)
      .then((answer) => handleUpdate(answer))
  }

  const modifyPost = (id) => {
    const match = posts.filter(post => post.id === id)
    setNewTitle(match[0].title)
    setNewWriter(match[0].writer)
    setNewBody(match[0].body)
    setNewId(id)
  }

  const addPost = (event) => {
    event.preventDefault()

    const copyArr = [...posts]
    const matches = copyArr.filter(post => post.id === newId)

    if (matches.length === 0) {
      const postObject = {
        title: newTitle,
        writer: newWriter,
        time: new Date().toISOString(),
        body: newBody,
        visibility: false
      }
      postService
        .createPost(postObject)
        .then((answer) => handleUpdate(answer))
    } else {
      console.log(matches)
      const postObject = {
        title: newTitle,
        writer: newWriter,
        time: matches[0].time,
        body: newBody,
        visibility: true,
        id: matches[0].id
      }
      postService
        .updatePost(matches[0].id, postObject)
        .then((answer) => handleUpdate(answer))
    }

    setNewTitle('')
    setNewWriter('')
    setNewBody('')
    setNewId(posts.length)
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
          modifyPost={modifyPost}
        />
        <PostForm
          addPost={addPost}
          newTitle={newTitle}
          newBody={newBody}
          newWriter={newWriter}
          handleTitleChange={handleTitleChange}
          handleWriterChange={handleWriterChange}
          handleBodyChange={handleBodyChange}
        />
      </div>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
