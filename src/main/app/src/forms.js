/* eslint-disable react/prop-types */
import React from 'react'

const PostForm = ({ isLoggedIn, addPost, newTitle, newBody, newWriter, handleTitleChange, handleWriterChange, handleBodyChange }) => {
  return (
    <div style={{ display: (isLoggedIn) ? 'inline' : 'none' }}>
      <h4>New Post</h4>
      <form onSubmit={addPost}>
        <div><input placeholder="Title" value={newTitle} onChange={handleTitleChange} /></div>
        <div><input placeholder="Writer" value={newWriter} onChange={handleWriterChange} /></div>
        <div><textarea placeholder="Text" value={newBody} onChange={handleBodyChange} style={{ height: 500, width: 500 }} /></div>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

const LoginForm = ({ isLoggedIn, checkLogin, username, password, handleUsernameChange, handlePasswordChange }) => {
  return (isLoggedIn
    ? <div>
      <form onSubmit={checkLogin}>
        <button type="submit">Logout</button>
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
