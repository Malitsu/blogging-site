import React from 'react';

function TitleListItem(props) {
return <li>{props.title}</li>
}
function TitleList(props) {
    const posts = props.posts;
    const titles = posts.map((post) =>
    <TitleListItem key={post.id} title={post.title}/> )
    return (
    <div className="titleList">
        <h4>All the posts</h4>
        <ul >{titles}</ul>
    </div>    
    
    )

}
export default TitleList;