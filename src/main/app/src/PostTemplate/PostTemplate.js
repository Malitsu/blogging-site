/* eslint-disable react/prop-types */
import React from 'react'
import './PostTemplate.css'

function TemplateItem (props) {
  return (
    <div className="templateItem">
      <h4>{props.title}</h4>
      <p>{props.writer}</p>
      <p>{props.time}</p>
      <p>{props.body}</p>
    </div>
  )
}
function PostTemplate (props) {
  const posts = props.posts
  const template = posts.map(post =>
    <TemplateItem
      key={post.id}
      title={post.title}
      writer={post.writer}
      time={post.time}
      body={post.body}
    />)
  return (
    <div className="template">
      {template}
    </div>
  )
}
export default PostTemplate
