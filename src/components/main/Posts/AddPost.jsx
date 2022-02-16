import React from 'react';
import {Field , reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validators/index';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10Symbols = maxLengthCreator(15);

class AddPost extends React.Component{
  render() {
    return (
      <form className="add-post__form" onSubmit={this.props.handleSubmit}>
        <Field htmlFor="post-textarea" name='labelForTextarea' component='label' className="add-post__label">
          Add post
        </Field>
        <Field
          type="text"
          id="post-textarea"
          name = 'addNewPostMessage'
          component ={Textarea}
          placeholder='Post message'
          validate={[requiredField,maxLength10Symbols]}
        />
        <button  className="add-post__btn">
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

export default reduxForm({form:'addNewPost'})(AddPost);
