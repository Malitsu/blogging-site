/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import commentService from './services/comments'

const DeleteButton = ({ username, password, id, handleUpdate }) => {
  const deleteComment = () => {
    commentService.deleteComment(username, password, id)
      .then(answer => handleUpdate(answer))
  }

  return (
    <button onClick={deleteComment}>Delete</button>
  )
}

const Comment = ({ comment, isLoggedIn, username, password, handleUpdate, post }) => {
  const likeButton = () => {
    const likedComment = { ...comment }
    likedComment.likes = comment.likes + 1
    likedComment.blogPost = post
    console.log(likedComment)
    commentService.updateComment(comment.id, likedComment)
      .then(answer => handleUpdate(answer))
  }

  return (
    <p>
      <span style={{ color: 'green' }}>
        {comment.writer}  {comment.time}
      </span><br/>
      {comment.body}<br/>
      {comment.likes} <button onClick={likeButton}>👍</button>
      <span style={{ display: (isLoggedIn) ? 'inline' : 'none' }}>
        <DeleteButton
          id={comment.id}
          username={username}
          password={password}
          handleUpdate={handleUpdate}
        />
      </span>
    </p>
  )
}

const CommentForm = ({ post, handleUpdate }) => {
  const [newWriter, setNewWriter] = useState('')
  const [newBody, setNewBody] = useState('')

  const handleWriterChange = (event) => { setNewWriter(event.target.value) }
  const handleBodyChange = (event) => { setNewBody(event.target.value) }

  const createComment = (event) => {
    event.preventDefault()
    const commentObject = {
      writer: newWriter,
      time: new Date().toISOString(),
      body: newBody,
      likes: 0,
      blogPost: post
    }
    commentService.createComment(commentObject)
      .then(answer => handleUpdate(answer))
    setNewWriter('')
    setNewBody('')
  }

  return (
    <form onSubmit={createComment} method="POST">
      <div><input placeholder="Writer" value={newWriter} onChange={handleWriterChange} /></div>
      <div><textarea placeholder="Text" value={newBody} onChange={handleBodyChange} style={{ height: 100, width: 200 }} /></div>
      <button type="submit">Comment</button>
    </form>
  )
}

const Comments = ({ post, isLoggedIn, handleUpdate, username, password }) => {
  const rows = () => post.comments.map(comment =>
    <Comment
      key={comment.id}
      comment={comment}
      isLoggedIn={isLoggedIn}
      username={username}
      password={password}
      handleUpdate={handleUpdate}
      post={post}
    />
  )

  return (
    <div>
      <h5>Comments</h5>
      <ul>
        {rows()}
      </ul>
      <CommentForm
        post={post}
        handleUpdate={handleUpdate}
      />
    </div>
  )
}

export default Comments
