/* eslint-disable react/prop-types */
import React from 'react'
import './PostTemplate.css'

const FullSizePost = ({ setPostSize, title, writer, time, body }) => {
  return (
    <div>
      <h4 onClick={setPostSize}>{title}</h4>
      <p>{writer}</p>
      <p>{time}</p>
      <p>{body}</p>
      <h4 onClick={props.setPostSize}>{props.title}</h4>
      <p>{props.writer}</p>
      <p>{props.time}</p>
      <p>{props.body}</p>
      <h4 onClick={props.setPostSize}>{props.title}</h4>
      <p>{props.writer}</p>
      <p>{props.time}</p>
      <p>{props.body}</p>
      <button onClick={props.setPostSize}>Back</button>
    </div>
  )
}

const TemplateItem = ({ post, isLoggedIn, modifyPost, deletePost, setPostSize, isFullSize }) => {
  if (!isFullSize) {
    return (
      <div className="templateItem">
        <h4 onClick={setPostSize}>{post.title}</h4>
        <p>{post.writer}</p>
        <p>{post.time}</p>
        <p>{post.body}</p>
        <Buttons
          isLoggedIn={isLoggedIn}
          id={post.id}
          modifyPost={modifyPost}
          deletePost={deletePost}/>
      </div>
    )
  } else {
    return (

      <div className="templateItemFullSize">

        <FullSizePost
          key={post.id}
          setPostSize={setPostSize}
          title={post.title}
          writer={post.writer}
          time={post.time}
          body={post.body}

        />
        <Buttons
          isLoggedIn={isLoggedIn}
          id={post.id}
          modifyPost={modifyPost}
          deletePost={deletePost}/>
      </div>
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
}



}


const Buttons = ({ id, deletePost, modifyPost, isLoggedIn }) => {
  const modifyClick = () => {
    modifyPost(id)
  }

  const deleteClick = () => {
    deletePost(id)
  }
  if (isLoggedIn) {
    return (
      <div className="templateButtons">
        <button onClick={deleteClick}>Delete</button>
        <button onClick={modifyClick}>Modify</button>
      </div>)
  } else {
    return ('')
  }
}

const PostTemplate = ({ posts, isLoggedIn, deletePost, modifyPost, setPostSize, isFullSize }) => {
function PostTemplate(props) {
  const posts = props.posts;
function PostTemplate(props) {
  if(!props.isFullSize) {
  const posts = props.posts;
  const template = posts.map(post =>
    <TemplateItem
      key={post.key}
      post={post}
      isLoggedIn={isLoggedIn}
      modifyPost={modifyPost}
      deletePost={deletePost}
      setPostSize={setPostSize}
      isFullSize={isFullSize}
    />)
  return (
    <div className="template">
      {template}
    </div>
  )
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
export default PostTemplate
