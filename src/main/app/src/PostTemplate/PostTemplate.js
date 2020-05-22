import React from 'react';
import './PostTemplate.css'

function PostTemplate(props) {
    return (
      <div className="templateItem">
        <h4>{props.posts.title}</h4>
        <p>{props.posts.writer}</p>
        <p>{props.posts.time}</p>
        <p>{props.posts.body}</p>
      </div>
    )
}
export default PostTemplate;