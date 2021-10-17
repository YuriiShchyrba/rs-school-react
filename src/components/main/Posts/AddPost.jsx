import React from 'react';

class AddPost extends React.Component{

  onAddPost = () => {
    this.props.addPost();
  }

  onChangeNewPostSymbol = (e) => {
    this.props.changeNewPostSymbol(e.target.value);
  }

  render() {
    return (
      <form className="add-post__form">
        <label htmlFor="post-textarea" className="add-post__label">
          Add post
        </label>
        <textarea
          value={this.props.postsData.postTextArea}
          type="text"
          id="post-textarea"
          onChange={this.onChangeNewPostSymbol}
        />
        <button type="button" className="add-post__btn" onClick={this.onAddPost}>
          Submit
        </button>
      </form>
    );
  }

}

// const AddPost = (props) => {
//   // let postElement = React.createRef();
//   let onAddPost = () => {
//     props.addPost();
//   };
//   let onChangeNewPostSymbol = (e) => {
//     props.changeNewPostSymbol(e.target.value);
//   };

//   return (
//     <form className="add-post__form">
//       <label htmlFor="post-textarea" className="add-post__label">
//         Add post
//       </label>
//       <textarea
//         value={props.postsData.postTextArea}
//         type="text"
//         id="post-textarea"
//         onChange={onChangeNewPostSymbol}
//       />
//       <button type="button" className="add-post__btn" onClick={onAddPost}>
//         Submit
//       </button>
//     </form>
//   );
// };

export default AddPost;
