/* eslint-disable react/prop-types */
import React from 'react'

const TitleListItem = ({ title, id, setPostSize }) => {
  const changePostSize = () => {
    setPostSize(id)
  }
  return <li onClick={changePostSize}>{title}</li>
}

const TitleList = ({ posts, setPostSize }) => {
  const titles = posts.map(post =>
    <TitleListItem
      key={post.id}
      title={post.title}
      id={post.id}
      setPostSize={setPostSize}
    />)

  return (
    <div className="titleList">
      <h4>All the posts</h4>
      <ul>{titles}</ul>
    </div>

  )
}

export default TitleList
