/* eslint-disable react/prop-types */
import React from 'react'
import './PostTemplate.css'

const TemplateItem = (props) => {
  const body = props.body.split('\n').map(item => {
    return (
      <span key={item.id}>
        {item}
        <br/>
      </span>
    )
  })

  console.log(props.body)
  return (
    <div className="templateItem">
      <h4>{props.title}</h4>
      <p>{props.writer}</p>
      <p>{props.time}</p>
      <p>{body}</p>
    </div>
  )
}

const PostTemplate = (props) => {
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
