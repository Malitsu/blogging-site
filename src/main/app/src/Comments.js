/* eslint-disable react/prop-types */
import React from 'react'

const Comment = ({ writer, time, likes, body }) => {
  return (
    <p>
      <span style={{ color: 'green' }}>{writer}  {time}</span><br/>
      {body}<br/>
      {likes} 👍
    </p>
  )
}

const Comments = ({ comments }) => {
  const rows = () => comments.map(comment =>
    <Comment
      key={comment.id}
      writer={comment.writer}
      time={comment.time}
      likes={comment.likes}
      body={comment.body}
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
