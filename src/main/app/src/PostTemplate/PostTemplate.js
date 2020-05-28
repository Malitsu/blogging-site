/* eslint-disable react/prop-types */
import React from 'react'
import Comments from './../Comments'
import './PostTemplate.css'

const FullSizePost = ({ setPostSize, title, writer, time, body, postComments }) => {
  return (
    <div>
      <h4 onClick={setPostSize}>{title}</h4>
      <p>{writer}</p>
      <p>{time}</p>
      <p>{body}</p>
      <Comments
        comments={postComments}
      />
    </div>
  )
}

const TemplateItem = ({ post, isLoggedIn, modifyPost, deletePost, setPostSize, isFullSize, postComments }) => {
  if (!isFullSize) {
    return (
      <div className="templateItem">
        <h4 onClick={setPostSize}>{post.title}</h4>
        <p>{post.writer}</p>
        <p>{post.time}</p>
        <p>{post.body}</p>
        <Buttons
          isLoggedIn={isLoggedIn}
          id={post.id}
          modifyPost={modifyPost}
          deletePost={deletePost}
        />
      </div>
    )
  } else {
    return (

      <div className="templateItemFullSize">

        <FullSizePost
          key={post.id}
          setPostSize={setPostSize}
          title={post.title}
          writer={post.writer}
          time={post.time}
          body={post.body}
          postComments={postComments}
        />
        <Buttons
          isLoggedIn={isLoggedIn}
          id={post.id}
          modifyPost={modifyPost}
          deletePost={deletePost}
        />
      </div>
    )
  }
}

const Buttons = ({ id, deletePost, modifyPost, isLoggedIn }) => {
  const modifyClick = () => {
    modifyPost(id)
  }

  const deleteClick = () => {
    deletePost(id)
  }
  if (isLoggedIn) {
    return (
      <div className="templateButtons">
        <button onClick={deleteClick}>Delete</button>
        <button onClick={modifyClick}>Modify</button>
      </div>)
  } else {
    return ('')
  }
}

const PostTemplate = ({ posts, isLoggedIn, deletePost, modifyPost, setPostSize, isFullSize, comments }) => {
  const template = posts.map(post =>
    <TemplateItem
      post={post}
      key={post.id}
      isLoggedIn={isLoggedIn}
      modifyPost={modifyPost}
      deletePost={deletePost}
      setPostSize={setPostSize}
      isFullSize={isFullSize}
      postComments={comments.filter(comment => comment.blogPost === post.id)}
    />)
  return (
    <div className="template">
      {template}
    </div>
  )
}
export default PostTemplate
