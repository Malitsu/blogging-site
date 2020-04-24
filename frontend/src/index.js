/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Post = ({post}) => {
  return (
    <p>
      {post.title}
    </p>
  )
}

const Posts = ({posts}) => {
  console.log(posts)
  const rows = () => posts.map(post =>
    <Post
      key={post.id}
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
  const posts = [{ id: 0, title: 'Heippa' }, { id: 1, title: 'Moikka' }, { id: 2, title: 'Terve' }]

  return (
    <div>
      <h1>Blogging Site</h1>
      <h2>Posts</h2>
      <div>
        <Posts
          posts={posts}
        />
      </div>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
