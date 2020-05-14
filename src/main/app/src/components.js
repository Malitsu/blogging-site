/* eslint-disable react/prop-types */
import React from 'react'

const Postbody = ({ isLoggedIn, post, visibility, modifyPost, deletePost }) => {
  const modifyClick = () => {
    modifyPost(post.id)
  }

  const deleteClick = () => {
    deletePost(post.id)
  }

  return (visibility
    ? <div>
      <p>{post.writer} {post.time.toString()}</p>
      <p>{post.body}</p>
      <p style={{ display: (isLoggedIn) ? 'inline' : 'none' }}>
        <button onClick={deleteClick}>delete</button>
        <button onClick={modifyClick}>modify</button></p>
    </div>
    : <p></p>)
}

const Post = ({ isLoggedIn, post, setVisibility, deletePost, modifyPost }) => {
  const showPost = () => {
    setVisibility(post.id)
  }

  return (
    <li>
      <span onClick={showPost}>{post.title} </span>
      <Postbody
        isLoggedIn={isLoggedIn}
        post={post}
        visibility={post.visibility}
        modifyPost={modifyPost}
        deletePost={deletePost}
      />
    </li>
  )
}

const Posts = ({ isLoggedIn, posts, search, setVisibility, deletePost, modifyPost }) => {
  const postsToShow = (search === '')
    ? posts
    : posts.filter(post => post.body.toLowerCase().includes(search.toLowerCase()) ||
                           post.title.toLowerCase().includes(search.toLowerCase()))

  const rows = () => postsToShow.map(post =>
    <Post
      isLoggedIn={isLoggedIn}
      key={post.id}
      post={post}
      setVisibility={setVisibility}
      deletePost={deletePost}
      modifyPost={modifyPost}
    />
  )

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default Posts
