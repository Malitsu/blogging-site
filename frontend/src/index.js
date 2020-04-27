/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import './index.css'

const Postbody = ({ writer, time, body, visibility }) => {
  return (visibility ? <div><p>{writer}</p><p>{time.toString()}</p><p>{body}</p></div>
    : <p></p>)
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
        writer={post.writer}
        time={post.time}
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
/*  useEffect(() => {
    const postArr = [{ id: 0, title: 'Heippa', writer: 'Pertti', time: new Date('June 13, 2014 09:04:00'), body: 'Ken söi kesävoin?', visibility: false },
      { id: 1, title: 'Moikka', writer: 'Virve', time: new Date('October 19, 2019 11:13:00'), body: 'No en ainakaan mää.', visibility: false },
      { id: 2, title: 'Terve', writer: 'Olavi', time: new Date('February 20, 2020 20:20:00'), body: 'Se oli varmaan Pertti', visibility: false }]
    setPosts([postArr])
  }, []) */

  const [posts, setPosts] = useState([{ id: 0, title: 'Heippa', writer: 'Pertti', time: new Date('June 13, 2014 09:04:00'), body: 'Ken söi kesävoin?', visibility: false },
    { id: 1, title: 'Moikka', writer: 'Virve', time: new Date('October 19, 2019 11:13:00'), body: 'No en ainakaan mää.', visibility: false },
    { id: 2, title: 'Terve', writer: 'Olavi', time: new Date('February 20, 2020 20:20:00'), body: 'Se oli varmaan Pertti', visibility: false }])

  const [newTitle, setNewTitle] = useState('')
  const [newWriter, setNewWriter] = useState('')
  const [newBody, setNewBody] = useState('')

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleWriterChange = (event) => {
    setNewWriter(event.target.value)
  }

  const handleBodyChange = (event) => {
    setNewBody(event.target.value)
  }

  const setVisibility = (id) => {
    const match = posts.filter(post => post.id === id)
    match[0].visibility = !match[0].visibility
    const copyArr = posts.map(post => post.id === id ? match[0] : post)
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
    copyArr.push({ id: id, title: newTitle, writer: newWriter, time: new Date(), body: newBody, visibility: false })
    setPosts(copyArr)
    setNewTitle('')
    setNewWriter('')
    setNewBody('')
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
