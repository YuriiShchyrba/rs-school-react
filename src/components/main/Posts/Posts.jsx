import React from 'react';
import AddPost from './AddPost';
import Post from './Post';

class Posts extends React.Component{

  render(){
    let posts = this.props.postsData.posts.map((element) => {
      return <Post key={element.id} message={element.message} likesCount={element.likesCount} />;
    });
    return (
      <div className="main-page__posts">
        <AddPost
            postsData = {this.props.postsData}
            addPost = {this.props.addPost}
            changeNewPostSymbol = {this.props.changeNewPostSymbol}
        />
        <div className="posts__wrapper">{posts}</div>
      </div>
    );
  }

}

// const Posts = (props) => {
//   let posts = props.postsData.posts.map((element) => {
//     return <Post key={element.id} message={element.message} likesCount={element.likesCount} />;
//   });
//   return (
//     <div className="main-page__posts">
//       <AddPost
//           postsData = {props.postsData}
//           addPost = {props.addPost}
//           changeNewPostSymbol = {props.changeNewPostSymbol}
//       />
//       <div className="posts__wrapper">{posts}</div>
//     </div>
//   );
// };

export default Posts;
