/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import './index.css'

const Postbody = ({ body, visibility }) => {
  // console.log(visibility)
  return (visibility ? <p>{body}</p> : <p></p>)
}

const Post = ({ post, setVisibility }) => {
  const showPost = () => {
    setVisibility(post.id)
  }

  return (
    <li>
      <p onClick={showPost}>{post.title}</p>
      <Postbody
        body={post.body}
        visibility={post.visibility}
      />
    </li>
  )
}

const Posts = ({ posts, setVisibility }) => {
  const rows = () => posts.map(post =>
    <Post
      key={post.id}
      post={post}
      setVisibility={setVisibility}
    />
  )

  return (
    <ul>
      {rows()}
    </ul>
  )
}

const App = () => {
  useEffect(() => {
    const postArr = [{ id: 0, title: 'Heippa', body: 'Ken söi kesävoin?', visibility: false },
      { id: 1, title: 'Moikka', body: 'No en ainakaan mää.', visibility: false },
      { id: 2, title: 'Terve', body: 'Se oli varmaan Pertti', visibility: false }
    ]
    setPosts(postArr)
  }, [])

  const [posts, setPosts] = useState([])

  const setVisibility = (id) => {
    const copyArr = [...posts]
    copyArr[id].visibility = !copyArr[id].visibility
    // console.log(copyArr[id].visibility)
    setPosts(copyArr)
  }

  return (
    <div>
      <h1>Blogging Site</h1>
      <h2>Posts</h2>
      <div>
        <Posts
          posts={posts}
          setVisibility={setVisibility}
        />
      </div>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
