import React from 'react';
import './PostTemplate.css'

function FullSizePost(props) {
  return (
    <div>
      <h4 onClick={props.setPostSize}>{props.title}</h4>
      <p>{props.writer}</p>
      <p>{props.time}</p>
      <p>{props.body}</p>
    </div>
  )
}

function TemplateItem(props) {

  if(!props.isFullSize) {
    return (
    <div className="templateItem"> 
      <h4 onClick={props.setPostSize}>{props.title}</h4>
        <p>{props.writer}</p>
        <p>{props.time}</p>
        <p>{props.body}</p>
        <Buttons 
        isLoggedIn={props.isLoggedIn}
        id={props.id}
        modifyPost={props.modifyPost}
        deletePost={props.deletePost}/>
    </div>
  )}
  else {
    return (
      
      <div className="templateItemFullSize">
        
        <FullSizePost 
        key={props.id}
        title={props.title}
        writer={props.writer}
        time={props.time}
        body={props.body}

        />
        <Buttons 
        isLoggedIn={props.isLoggedIn}
        id={props.id}
        modifyPost={props.modifyPost}
        deletePost={props.deletePost}/>
    </div>
    )
  }


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
      deletePost={props.deletePost}
      setPostSize={props.setPostSize}
      isFullSize={props.isFullSize}
      posts={posts}
      />)
    return (
      <div className="template">
        {template}
      </div>
    )
}
export default PostTemplate;