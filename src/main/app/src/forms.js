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
      <form onSubmit={checkLogin}>
        <div><input placeholder="Username" value={username} onChange={handleUsernameChange}/></div>
        <div><input placeholder="Password" value={password} onChange={handlePasswordChange}/></div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

const SearchForm = ({ search, handleSearchChange }) => {
  return (
    <div>
      <form>
        <div><input placeholder="Search" value={search} onChange={handleSearchChange}/></div>
      </form>
    </div>
  )
}

export { PostForm, LoginForm, SearchForm }
