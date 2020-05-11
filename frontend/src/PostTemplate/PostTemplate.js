import React from 'react';

function PostTemplate(props) {
    return (
       <div className="template">
         <h3>{props.title}</h3>
    <p>{props.writer}</p>
    <p>{props.time}</p>
    <p>{props.body}</p>
       </div>
    )
}
export default PostTemplate;