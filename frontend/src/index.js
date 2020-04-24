import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Post = (post) => {
  return (
    <p>
      {post.title}
    </p>
  )
}

const Posts = (posts) => {
  const rows = posts.map(post =>
    <Post 
      post={post}
    />
  )
  return (
    <div>
      {rows()}
    </div>
  )
}

const App = () => {

  const posts = []

  return (
    <div>
      <h1>Blogging Site</h1>
      <h2>Posts</h2>
      <Posts
        posts={posts}
      />
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
