/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import postService from './services/posts'
import authService from './services/auth'
import './index.css'

const Postbody = ({ post, visibility, modifyPost }) => {
  const modifyClick = () => {
    modifyPost(post.id)
  }

  return (visibility
    ? <div className="post">
      <p>{post.writer} {post.time.toString()}</p>
      <p>{post.body}</p>
      <p><button onClick={modifyClick}>modify</button></p>
    </div>
    : <p></p>)
}

const Post = ({ post, setVisibility, handleUpdate, modifyPost }) => {
  const showPost = () => {
    setVisibility(post.id)
  }

  const deleteClick = () => {
    postService
      .deletePost(post.id)
      .then((answer) => handleUpdate(answer))
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

const Posts = ({ posts, setVisibility, handleUpdate, modifyPost }) => {
  const rows = () => posts.map(post =>
    <Post
      key={post.id}
      post={post}
      setVisibility={setVisibility}
      handleUpdate={handleUpdate}
      modifyPost={modifyPost}
    />
  )

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

const PostForm = ({ addPost, newTitle, newBody, newWriter, handleTitleChange, handleWriterChange, handleBodyChange }) => {
  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={addPost}>
        <div>title: <input value={newTitle} onChange={handleTitleChange} /></div>
        <div>writer: <input value={newWriter} onChange={handleWriterChange} /></div>
        <div>body: <input value={newBody} onChange={handleBodyChange} /></div>
        <button type="submit">post</button>
      </form>
    </div>
  )
}

const LoginForm = ({ checkLogin, username, password, handleUsernameChange, handlePasswordChange }) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={checkLogin}>
        <div>username: <input value={username} onChange={handleUsernameChange}/></div>
        <div>password: <input value={password} onChange={handlePasswordChange}/></div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

const SearchForm = ({ makeSearch, search, handleSearchChange }) => {
  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={makeSearch}>
        <div><input value={search} onChange={handleSearchChange}/></div>
        <button type="submit">search</button>
      </form>
    </div>
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
  const [newId, setNewId] = useState(posts.length + 1)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleTitleChange = (event) => { setNewTitle(event.target.value) }
  const handleWriterChange = (event) => { setNewWriter(event.target.value) }
  const handleBodyChange = (event) => { setNewBody(event.target.value) }
  const handleUsernameChange = (event) => { setUsername(event.target.value) }
  const handlePasswordChange = (event) => { setPassword(event.target.value) }
  const handleSearchChange = (event) => { setSearch(event.target.value) }

  const handleUpdate = (answer) => {
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

  const checkLogin = (event) => {
    event.preventDefault()
    console.log(username, password)
    if (isLoggedIn) {
      console.log('You are already logged in!')
    } else {
      authService.login(username, password)
        .then(response => {
          if (response.status === 200) {
            setLoggedIn(true)
          }
          else {
            console.log('Wrong login information!')
          }
        })
    }
    setUsername('')
    setPassword('')
  }

  const makeSearch = (event) => {
    event.preventDefault()
    console.log(search)
    setSearch('')
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
        id: newId
      }
      postService
        .updatePost(matches[0].id, postObject)
        .then((answer) => handleUpdate(answer))
    }

    setNewTitle('')
    setNewWriter('')
    setNewBody('')
    setNewId(posts.length + 1)
  }

  return (
    <div>
      <h1>Blogging Site</h1>
<<<<<<< HEAD:frontend/src/index.js
      <h2>Posts</h2>
      <div>
        <div className="postBody">
          <Posts
          posts={posts}
          setVisibility={setVisibility}
          deletePost={deletePost}
          modifyPost={modifyPost}
        /></div>
        <div className="postForm">
          <PostForm
          addPost={addPost}
          newTitle={newTitle}
          newBody={newBody}
          newWriter={newWriter}
          handleTitleChange={handleTitleChange}
          handleWriterChange={handleWriterChange}
          handleBodyChange={handleBodyChange}
        /></div>
        
      </div>
=======
      <SearchForm
        makeSearch={makeSearch}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <Posts
        posts={posts}
        setVisibility={setVisibility}
        handleUpdate={handleUpdate}
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
      <LoginForm
        checkLogin={checkLogin}
        username={username}
        password={password}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
      />
>>>>>>> f8c7bd14d6352d28cae8cb7e3f93eb30e6a21446:src/main/app/src/index.js
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
