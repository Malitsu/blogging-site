/* eslint-disable react/prop-types */
import React from 'react'
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
    console.log(post.id+ ' in templateItem');
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
          deletePost={deletePost}/>
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

const PostTemplate = ({ posts, isLoggedIn, search, setVisibility, deletePost, modifyPost, setPostSize, isFullSize, fullSizeId }) => {
  console.log(posts)
  if (!isFullSize) {
      const template = posts.map(post =>
      <TemplateItem
      key={post.id}
      post={post}
      isLoggedIn={isLoggedIn}
      modifyPost={modifyPost}
      deletePost={deletePost}
      setPostSize={setPostSize}
    />)
  return (
    <div className="template">
      {template}
    </div>
  )}
  else {
    const match = posts.filter(post => post.id === fullSizeId)
    console.log(fullSizeId+ ' in FullSizePost')
      return (
      <div className="templateItemFullSize">
        <FullSizePost
          key={match.id}
          setPostSize={setPostSize}
          title={match.title}
          writer={match.writer}
          time={match.time}
          body={match.body}

        />
        <Buttons
          isLoggedIn={isLoggedIn}
          id={match.id}
          modifyPost={modifyPost}
          deletePost={deletePost}/>
      </div>
    )
  }
}

export default PostTemplate;