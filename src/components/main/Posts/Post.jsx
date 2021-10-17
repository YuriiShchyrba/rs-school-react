import React from 'react';

class Post extends React.Component{

  render(){
    return (
      <div className="post__wrapper">
        <div className="post-info__wrapper">
          <img src="../../../assets/avatar.jpg" alt="" className="post-info__photo" />
          <div className="post">{this.props.message}</div>
        </div>
        <div className="post-likes__wrapper">
          <img src="../../../assets/like.svg" alt="" className="post-likes__icon" />
          {this.props.likesCount}
        </div>
      </div>
    );
  }
}

// const Post = (props) => {
//   return (
//     <div className="post__wrapper">
//       <div className="post-info__wrapper">
//         <img src="../../../assets/avatar.jpg" alt="" className="post-info__photo" />
//         <div className="post">{props.message}</div>
//       </div>
//       <div className="post-likes__wrapper">
//         <img src="../../../assets/like.svg" alt="" className="post-likes__icon" />
//         {props.likesCount}
//       </div>
//     </div>
//   );
// };

export default Post;
