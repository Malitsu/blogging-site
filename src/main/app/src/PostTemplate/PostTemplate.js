/* eslint-disable react/prop-types */
import React from 'react'
import Comments from './../Comments'
import './PostTemplate.css'

const FullSizePost = ({ setPostSize, post, isLoggedIn, deletePost, modifyPost, username, password, commentPost }) => {
  const changePostSize = () => {
    setPostSize('')
  }
  return (
    <div>
      <h4 onClick={changePostSize}>{post.title}</h4>
      <p>{post.writer}</p>
      <p>{post.time}</p>
      <p>{post.body}</p>
      <button onClick={changePostSize}>Back</button>
      <Buttons
        isLoggedIn={isLoggedIn}
        id={post.id}
        modifyPost={modifyPost}
        deletePost={deletePost}/>
      <Comments
        comments={post.comments}
        isLoggedIn={isLoggedIn}
        username={username}
        password={password}
        id={post.id}
        commentPost={commentPost}
      />
    </div>
  )
}

const TemplateItem = ({ post, setPostSize }) => {
  const changePostSize = () => {
    setPostSize(post.id)
  }
  return (
    <div className="templateItem">
      <h4 onClick={changePostSize}>{post.title}</h4>
      <p>{post.writer}</p>
      <p>{post.time}</p>
      <p>{post.body}</p>
    </div>
  )
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
    return (<div></div>)
  }
}

const PostTemplate = ({ posts, isLoggedIn, deletePost, modifyPost, setPostSize, isFullSize, fullSizeId, username, password }) => {
  if (!isFullSize) {
    const template = posts.map(post =>
      <TemplateItem
        key={post.id}
        post={post}
        setPostSize={setPostSize}
      />)
    return (
      <div className="template">
        {template}
      </div>
    )
  } else {
    const match = posts.filter(post => post.id === fullSizeId)
    console.log('Inside ')
    return (
      <div className="templateItemFullSize">
        <FullSizePost
          key={match[0].id}
          setPostSize={setPostSize}
          post={match[0]}
          isLoggedIn={isLoggedIn}
          deletePost={deletePost}
          modifyPost={modifyPost}
          username={username}
          password={password}
        />
      </div>
    )
  }
}

export default PostTemplate
