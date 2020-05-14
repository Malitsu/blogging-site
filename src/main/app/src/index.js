/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import postService from './services/posts'
import authService from './services/authentication'
import './index.css'
import TitleList from './TitleList/TitleList'

const Postbody = ({ isLoggedIn, post, visibility, modifyPost, deletePost }) => {
  const modifyClick = () => {
    modifyPost(post.id)
  }

  const deleteClick = () => {
    deletePost(post.id)
  }

  return (visibility
    ? <div>
      <p>{post.writer} {post.time.toString()}</p>
      <p>{post.body}</p>
      <p style={{ visibility: (isLoggedIn) ? 'visible' : 'hidden' }}>
        <button onClick={deleteClick}>delete</button>
        <button onClick={modifyClick}>modify</button></p>
    </div>
    : <p></p>)
}

const Post = ({ isLoggedIn, post, setVisibility, deletePost, modifyPost }) => {
  const showPost = () => {
    setVisibility(post.id)
  }

  return (
    <li>
      <span onClick={showPost}>{post.title} </span>
      <Postbody
        isLoggedIn={isLoggedIn}
        post={post}
        visibility={post.visibility}
        modifyPost={modifyPost}
        deletePost={deletePost}
      />
    </li>
  )
}

const Posts = ({ isLoggedIn, posts, search, setVisibility, deletePost, modifyPost }) => {
  const postsToShow = (search === '')
    ? posts
    : posts.filter(post => post.body.toLowerCase().includes(search.toLowerCase()) ||
                           post.title.toLowerCase().includes(search.toLowerCase()))

  const rows = () => postsToShow.map(post =>
    <Post
      isLoggedIn={isLoggedIn}
      key={post.id}
      post={post}
      setVisibility={setVisibility}
      deletePost={deletePost}
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

const PostForm = ({ isLoggedIn, addPost, newTitle, newBody, newWriter, handleTitleChange, handleWriterChange, handleBodyChange }) => {
  return (
    <div style={{ visibility: (isLoggedIn) ? 'visible' : 'collapse' }}>
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

const LoginForm = ({ isLoggedIn, checkLogin, username, password, handleUsernameChange, handlePasswordChange }) => {
  return (isLoggedIn
    ? <div>
      <form onSubmit={checkLogin}>
        <button type="submit">logout</button>
      </form>
    </div>
    : <div>
      <h2>Login</h2>
      <form onSubmit={checkLogin}>
        <div>username: <input value={username} onChange={handleUsernameChange}/></div>
        <div>password: <input value={password} onChange={handlePasswordChange}/></div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

const SearchForm = ({ search, handleSearchChange }) => {
  return (
    <div>
      <h2>Search</h2>
      <form>
        <div><input value={search} onChange={handleSearchChange}/></div>
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
            console.log('success!')
          } else {
            console.log('Wrong login information!')
            setLoggedIn(false)
          }
        })
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
        .updatePost(username, password, matches[0].id, postObject)
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
      <SearchForm
        makeSearch={makeSearch}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <TitleList 
        posts={posts}
        />
      <Posts
        isLoggedIn={isLoggedIn}
        posts={posts}
        search={search}
        setVisibility={setVisibility}
        deletePost={deletePost}
        modifyPost={modifyPost}
      />
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
      <LoginForm
        isLoggedIn={isLoggedIn}
        checkLogin={checkLogin}
        username={username}
        password={password}
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
