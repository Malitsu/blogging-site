import React from 'react';
import './PostTemplate.css'

function TemplateItem(props) {
  return (
    <div className="templateItem"> 
      <h4 onClick="setPostSize">{props.title}</h4>
        <p>{props.writer}</p>
        <p>{props.time}</p>
        <p>{props.body}</p>
        <Buttons 
        isLoggedIn={props.isLoggedIn}
        id={props.id}
        modifyPost={props.modifyPost}
        deletePost={props.deletePost}/>
    </div>
  )

}

const Buttons = ({id, deletePost, modifyPost, isLoggedIn}) => {
  
  const modifyClick = () => {
  modifyPost(id)
}

  const deleteClick = () => {
  deletePost(id)
}
    if(isLoggedIn) {
    return (
    <div className="templateButtons">
      <button onClick={deleteClick}>Delete</button>
      <button onClick={modifyClick}>Modify</button>
    </div>)
    }
    else {
      return ('')
    }
  } 

function PostTemplate(props) {
  const posts = props.posts;
  const template = posts.map(post =>
    <TemplateItem 
      title={post.title} 
      writer={post.writer} 
      time={post.time} 
      body={post.body} 
      id={post.id} 
      isLoggedIn={props.isLoggedIn}
      modifyPost={props.modifyPost}
      deletePost={props.deletePost}/>)
    return (
      <div className="template">
        {template}
      </div>
    )
}
export default PostTemplate;