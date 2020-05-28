/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'

import postService from './services/posts'
import authService from './services/authentication'
import './index.css'
import TitleList from './TitleList/TitleList'
import { PostForm, LoginForm, SearchForm } from './forms'
import Posts from './components'
import PostTemplate from './PostTemplate/PostTemplate'
import TitleTemplate from './TitleTemplate/TitleTemplate'

const App = () => {
  useEffect(() => {
    postService
      .getPosts()
      .then(initialPosts => {
        setPosts(initialPosts)
      })
  }, [])

  const [posts, setPosts] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newWriter, setNewWriter] = useState('')
  const [newBody, setNewBody] = useState('')
  const [newId, setNewId] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isFullSize, setNewSize] = useState(false)
  const [fullSizeId, setFullSizeId] = useState()

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
    if (isLoggedIn) {
      setLoggedIn(false)
      setUsername('')
      setPassword('')
    } else {
      authService
        .login(username, password)
        .then(response => {
          if (response.status === 200) {
            setLoggedIn(true)
            setNewId(posts.length + 1)
          } else {
            console.log('Wrong login information!')
            setLoggedIn(false)
          }
        })
    }
  }

  const setPostSize = (id) => {
    if (isFullSize) {
      setNewSize(false)
      setFullSizeId('')
    } else {
      setNewSize(true)
      setFullSizeId(id)
      
    }
  }

  const makeSearch = (event) => {
    event.preventDefault()
    console.log(search)
  }

  const deletePost = (id) => {
    postService
      .deletePost(username, password, id)
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
        .createPost(username, password, postObject)
        .then((answer) => handleUpdate(answer))
    } else {
      const postObject = {
        title: newTitle,
        writer: newWriter,
        time: matches[0].time,
        body: newBody,
        visibility: true,
        id: newId
      }
      postService
        .updatePost(username, password, matches[0].id, postObject)
        .then((answer) => handleUpdate(answer))
    }

    setNewTitle('')
    setNewWriter('')
    setNewBody('')
    setNewId(posts.length + 1)
  }

  /* const deleteComment = (id) => {
    commentService
      .deleteComment(username, password, id)
      .then((answer) => handleUpdate(answer))
  }
  const modifyComment = (id) => {
    const match = comments.filter(comment => comment.id === id)
    setComment(match[0].body)
    setCommenter(match[0].writer)
    setNewId(match[0].blogpost)
  }
  const addComment = (event) => {
    event.preventDefault()
    const copyArr = [...comments]
    const matches = copyArr.filter(comment => comment.id === newId)
    if (matches.length === 0) {
      const commentObject = {
        writer: newCommenter,
        time: new Date().toISOString(),
        body: newComment,
        blogPost: newId
      }
      postService
        .createComment(username, password, commentObject)
        .then((answer) => handleUpdate(answer))
    } else {
      const commentObject = {
        writer: newCommenter,
        time: matches[0].time,
        body: newComment,
        id: matches[0].id,
        blogPost: matches[0].blogPost
      }
      postService
        .updatePost(username, password, matches[0].id, commentObject)
        .then((answer) => handleUpdate(answer))
    }
    setComment('')
    setCommenter('')
  } */

  return (
    <div>
      <TitleTemplate />
      <div className="main">
        <div className="right">
          <div className="search">
            <SearchForm
              makeSearch={makeSearch}
              search={search}
              handleSearchChange={handleSearchChange}
            />
          </div>
          <div className="loginForm">
            <LoginForm
              isLoggedIn={isLoggedIn}
              checkLogin={checkLogin}
              username={username}
              password={password}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="titleListForm">
          <TitleList
            posts={posts}
          />
        </div>

        <div className="templates">
          <PostTemplate
            posts={posts}
            isLoggedIn={isLoggedIn}
            deletePost={deletePost}
            modifyPost={modifyPost}
            setPostSize={setPostSize}
            isFullSize={isFullSize}
            fullSizeId={fullSizeId}
            username={username}
            password={password}
          />
        </div>
      </div>

      <div className="posts">
        <Posts
          isLoggedIn={isLoggedIn}
          posts={posts}
          search={search}
          setVisibility={setVisibility}
          deletePost={deletePost}
          modifyPost={modifyPost}
          setPostSize={setPostSize}
          isFullSize={isFullSize}
          fullSizeId={fullSizeId}
        />
      </div>

      <div>
        <PostForm
          isLoggedIn={isLoggedIn}
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
