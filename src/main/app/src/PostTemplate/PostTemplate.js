import React from 'react';
import './PostTemplate.css'

function FullSizePost(props) {
  return (
    <div>
      <h4 onClick={props.setPostSize}>{props.title}</h4>
      <p>{props.writer}</p>
      <p>{props.time}</p>
      <p>{props.body}</p>
      <button onClick={props.setPostSize}>Back</button>
    </div>
  )
}

function TemplateItem(props) {
  const changePostSize = () => {
    props.setPostSize(props.id);
  }
  return (
    <div className="templateItem"> 
      <h4 onClick={changePostSize}>{props.title}</h4>
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
  if(!props.isFullSize) {
  const posts = props.posts;
  const template = posts.map(post =>
    <TemplateItem 
      key={post.id}
      title={post.title} 
      writer={post.writer} 
      time={post.time} 
      body={post.body} 
      id={post.id} 
      isLoggedIn={props.isLoggedIn}
      modifyPost={props.modifyPost}
      deletePost={props.deletePost}
      setPostSize={props.setPostSize}
      posts={posts}
      />)
    return (
      <div className="template">
        {template}
      </div>
    )
  } else {
    const match = props.posts.filter(post => post.id === props.fullSizeId)
      return (
        <div className="templateItemFullSize">
          <FullSizePost 
          key={match.id}
          title={match.title}
          writer={match.writer}
          time={match.time}
          body={match.body}
          setPostSize={props.setPostSize}


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
export default PostTemplate;