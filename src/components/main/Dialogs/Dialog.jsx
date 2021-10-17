import React from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';

class Dialog extends React.Component{

  constructor(props){
    super(props);
    this.path = `/messages/${props.id}`;
  }


  onAddMessage = () => {
    this.props.addMessage(this.props.dialogsData.dialogTextArea, this.props.name);
  }

  onChangeNewMessageSymbol = (e) => {
    this.props.changeNewMessageSymbol(e.target.value);
  }

  render(){
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
          <form className="dialog__sent-message-form">
            <textarea
              value={this.props.dialogsData.dialogTextArea}
              className="dialog__sent-message-textarea"
              onChange={this.onChangeNewMessageSymbol}
            ></textarea>
            <button type="button" className="dialog__sent-message-btn" onClick={this.onAddMessage}>
              Sent
            </button>
          </form>
        </div>
      </div>
    );
  }

}


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
