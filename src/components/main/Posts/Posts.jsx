import React from 'react';
import AddPost from './AddPost';
import Post from './Post';


const Posts = (props) =>{
  console.log('render posts')
  const onAddPost = (message) => {
    props.addPost(message.addNewPostMessage);
  }
  let posts = props.postsData.posts.map((element) => {
    return <Post key={element.id} message={element.message} likesCount={element.likesCount} />;
  });
  return (
    <div className="main-page__posts">
      <AddPost
          onSubmit={onAddPost}
      />
      <div className="posts__wrapper">{posts}</div>
    </div>
  );
}

export default Posts;
