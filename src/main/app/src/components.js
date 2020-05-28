/* eslint-disable react/prop-types */
import React from 'react'
import Comments from './Comments'

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
        <button onClick={deleteClick}>Delete</button>
        <button onClick={modifyClick}>Modify</button>
      </p>
      <Comments
        comments={post.comments}
      />
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
      key={post.id}
      isLoggedIn={isLoggedIn}
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
