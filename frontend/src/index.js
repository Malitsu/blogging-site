/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Post = ({ post }) => {

  const showPost = () => {
    console.log(post.body)
  }

  return (
    <li>
      <a onClick={showPost}>{post.title}</a>
    </li>
  )
}

const Posts = ({ posts }) => {
  console.log(posts)
  const rows = () => posts.map(post =>
    <Post
      key={post.id}
      post={post}
    />
  )

  return (
    <ul>
      {rows()}
    </ul>
  )
}

const App = () => {
  const posts = [{ id: 0, title: 'Heippa', body: 'Ken söi kesävoin?' },
                 { id: 1, title: 'Moikka', body: 'No en ainakaan mää.' },
                 { id: 2, title: 'Terve', body: 'Se oli varmaan Pertti' }
                ]

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
