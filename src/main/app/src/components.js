/* eslint-disable react/prop-types */
import React from 'react'
import Comments from './Comments'

const Postbody = ({ isLoggedIn, post, visibility, modifyPost, deletePost, postComments }) => {
  const comments = postComments.filter(comment => comment.blogPost === post.id)

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
        <button onClick={modifyClick}>Modify</button></p>
      <Comments
        comments={comments}
      />
    </div>
    : <p></p>)
}

const Post = ({ isLoggedIn, post, setVisibility, deletePost, modifyPost, comments }) => {
  const showPost = () => {
    setVisibility(post.id)
  }

  const postComments = comments.filter(comment => comment.blogPost === post.id)

  return (
    <li>
      <span onClick={showPost}>{post.title} </span>
      <Postbody
        isLoggedIn={isLoggedIn}
        post={post}
        visibility={post.visibility}
        modifyPost={modifyPost}
        deletePost={deletePost}
        postComments={postComments}
      />
    </li>
  )
}

const Posts = ({ isLoggedIn, posts, search, setVisibility, deletePost, modifyPost, comments }) => {
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
      comments={comments}
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
