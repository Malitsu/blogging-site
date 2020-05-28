/* eslint-disable react/prop-types */
import React from 'react'
import commentService from './services/comments'

const DeleteButton = ({ username, password, id }) => {
  const deleteComment = () => {
    commentService.deleteComment(id)
  }

  return (
    <button onClick={deleteComment}>Delete</button>
  )
}

const Comment = ({ comment, isLoggedIn, username, password }) => {
  return (
    <p>
      <span style={{ color: 'green' }}>{comment.writer}  {comment.time}</span><br/>
      {comment.body}<br/>
      {comment.likes} 👍
      <p style={{ display: (isLoggedIn) ? 'inline' : 'none' }}>
        <DeleteButton
          id={comment.id}
          username={username}
          password={password}
        />
      </p>
    </p>
  )
}

const Comments = ({ comments, isLoggedIn, username, password }) => {
  const rows = () => comments.map(comment =>
    <Comment
      key={comment.id}
      comment={comment}
      isLoggedIn={isLoggedIn}
      username={username}
      password={password}
    />
  )

  return (
    <div>
      <h5>Comments</h5>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default Comments
