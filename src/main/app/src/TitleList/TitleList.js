import React from 'react';

function TitleListItem(props) {
return <li>{props.title}</li>
}
function TitleList(props) {
    const posts = props.posts;
    const titles = posts.map((post) =>
    <TitleListItem key={post.id} title={post.title}/> )
    return (
    <ul>{titles}</ul>
    )

}
export default TitleList;