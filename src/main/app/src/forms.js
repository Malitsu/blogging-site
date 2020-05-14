/* eslint-disable react/prop-types */
import React from 'react'

const PostForm = ({ isLoggedIn, addPost, newTitle, newBody, newWriter, handleTitleChange, handleWriterChange, handleBodyChange }) => {
  return (
    <div style={{ display: (isLoggedIn) ? 'inline' : 'none' }}>
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

export { PostForm, LoginForm, SearchForm }
