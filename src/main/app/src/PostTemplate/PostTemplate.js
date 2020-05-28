/* eslint-disable react/prop-types */
import React from 'react'
import Comments from './../Comments'
import './PostTemplate.css'

const FullSizePost = ({ setPostSize, title, writer, time, body }) => {
  return (
    <div>
      <h4 onClick={setPostSize}>{title}</h4>
      <p>{writer}</p>
      <p>{time}</p>
      <p>{body}</p>
      <button onClick={setPostSize}>Back</button>
    </div>
  )
}

const TemplateItem = ({ post, isLoggedIn, modifyPost, deletePost, setPostSize }) => {
  const changePostSize = () => {
    setPostSize(post.id);
  }
    return (
      <div className="templateItem">
        <h4 onClick={changePostSize}>{post.title}</h4>
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

const PostTemplate = ({ posts, isLoggedIn, deletePost, modifyPost, setPostSize, isFullSize, fullSizeId, username, password}) => {
  if (!isFullSize) {
      const template = posts.map(post =>
    <TemplateItem
      key={post.id}
      post={post}
      isLoggedIn={isLoggedIn}
      modifyPost={modifyPost}
      deletePost={deletePost}
      setPostSize={setPostSize}
      isFullSize={isFullSize}
      username={username}
      password={password}
    />)
  return (
    <div className="template">
      {template}
    </div>
  )}
  else {
    const match = posts.filter(post => post.id === fullSizeId)
      return (
      <div className="templateItemFullSize">
        <FullSizePost
          key={match[0].id}
          setPostSize={setPostSize}
          title={match[0].title}
          writer={match[0].writer}
          time={match[0].time}
          body={match[0].body}

        />
        <Buttons
          isLoggedIn={isLoggedIn}
          id={match[0].id}
          modifyPost={modifyPost}
          deletePost={deletePost}/>
      </div>
    )
  }
}

export default PostTemplate;