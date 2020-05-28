/* eslint-disable react/prop-types */
import React, { useState } from 'react'
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
      <span style={{ color: 'green' }}>
        {comment.writer}  {comment.time}
      </span><br/>
      {comment.body}<br/>
      {comment.likes} 👍
      <span style={{ display: (isLoggedIn) ? 'inline' : 'none' }}>
        <DeleteButton
          id={comment.id}
          username={username}
          password={password}
        />
      </span>
    </p>
  )
}

const CommentForm = ({ id }) => {
  const [newWriter, setNewWriter] = useState('')
  const [newBody, setNewBody] = useState('')

  const handleWriterChange = (event) => { setNewWriter(event.target.value) }
  const handleBodyChange = (event) => { setNewBody(event.target.value) }

  const createComment = () => {
    const commentObject = {
      writer: newWriter,
      time: new Date().toISOString(),
      body: newBody,
      likes: 0
    }
    commentService.createComment(commentObject)
      .then(answer => console.log(answer))
    setNewWriter('')
    setNewBody('')
  }

  return (
    <form onSubmit={createComment}>
      <div><input placeholder="Writer" value={newWriter} onChange={handleWriterChange} /></div>
      <div><textarea placeholder="Text" value={newBody} onChange={handleBodyChange} style={{ height: 100, width: 200 }} /></div>
      <button type="submit">Comment</button>
    </form>
  )
}

const Comments = ({ comments, isLoggedIn, username, password, id }) => {
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
      <CommentForm
        id={id}
      />
    </div>
  )
}

export default Comments
