import React from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../../utils/validators';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.path = `/messages/${props.id}`;
  }

  onAddMessage = (message) => {
    this.props.addMessage(message.addNewMessage, this.props.name);
  };

  // onChangeNewMessageSymbol = (e) => {
  //   this.props.changeNewMessageSymbol(e.target.value);
  // };

  render() {
    let messages = this.props.messages.map((messageState, ind) => {
      return (
        <Message
          key={ind}
          messageState={messageState}
          avatarSrc={this.props.profileData.avatarSrc}
          personPhoto={this.props.personPhoto}
        />
      );
    });
    return (
      <div className="dialog">
        <div className="dialog__person-info">
          <img src="../../../assets/avatar.jpg" alt="" className="dialog__person-photo" />
          <NavLink className="dialog__person-name" to={this.path}>
            {this.props.name}
          </NavLink>
        </div>
        <div className="dialog__text-info">
          {messages}
          <AddMessageReduxForm onSubmit={this.onAddMessage} />
        </div>
      </div>
    );
  }
}

const maxLength30Symbols = maxLengthCreator(30);

const AddMessageForm = (props) => {
  return (
    <form className="dialog__sent-message-form" onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[requiredField,maxLength30Symbols]}
        name="addNewMessage"
        className="dialog__sent-message-textarea"
      ></Field>
      <button className="dialog__sent-message-btn">Sent</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: 'addMessageForm' })(AddMessageForm);

// const Dialog = (props) => {
//   let path = `/messages/${props.id}`;
//   let messages = props.messages.map((messageState, ind) => {
//     return (
//       <Message
//         key={ind}
//         messageState={messageState}
//         avatarSrc={props.profileData.avatarSrc}
//         personPhoto={props.personPhoto}
//       />
//     );
//   });
//   let onAddMessage = () => {
//     props.addMessage(props.dialogsData.dialogTextArea, props.name);
//   };
//   let onChangeNewMessageSymbol = (e) => {
//     props.changeNewMessageSymbol(e.target.value);
//   };
//   return (
//     <div className="dialog">
//       <div className="dialog__person-info">
//         <img src="../../../assets/avatar.jpg" alt="" className="dialog__person-photo" />
//         <NavLink className="dialog__person-name" to={path}>
//           {props.name}
//         </NavLink>
//       </div>
//       <div className="dialog__text-info">
//         {messages}
//         <form className="dialog__sent-message-form">
//           <textarea
//             value={props.dialogsData.dialogTextArea}
//             className="dialog__sent-message-textarea"
//             onChange={onChangeNewMessageSymbol}
//           ></textarea>
//           <button type="button" className="dialog__sent-message-btn" onClick={onAddMessage}>
//             Sent
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

export default Dialog;
