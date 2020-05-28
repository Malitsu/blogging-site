/* eslint-disable react/prop-types */
import React from 'react'

const TitleListItem = ({ title }) => {
  return <li>{title}</li>
}

const TitleList = ({ posts }) => {
  const titles = posts.map(post =>
    <TitleListItem
      key={post.id}
      title={post.title}
    />)

  return (
    <div className="titleList">
      <h4>All the posts</h4>
      <ul>{titles}</ul>
    </div>

  )
}

export default TitleList
