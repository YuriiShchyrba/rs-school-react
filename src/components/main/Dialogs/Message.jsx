import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.style = props.messageState[0];
    this.message = props.messageState[1];
    this.photoStyle =
      props.messageState[0] === 'message-you'
        ? 'message-avatar'
        : 'message-avatar message-avatar_reverse';
    this.messageStyle =
      props.messageState[0] === 'message-you' ? 'message' : 'message message_reverse';
    this.imgSrc = props.messageState[0] === 'message-you' ? props.avatarSrc : props.personPhoto;
  }

  render() {
    return (
      <div className={this.messageStyle}>
        <img src={this.imgSrc} alt="" className={this.photoStyle} />
        <p className={this.style}>{this.message}</p>
      </div>
    );
  }
}

// const Message = (props) => {
//   let style = props.messageState[0];
//   let message = props.messageState[1];
//   let photoStyle =
//     props.messageState[0] === 'message-you'
//       ? 'message-avatar'
//       : 'message-avatar message-avatar_reverse';
//   let messageStyle =
//     props.messageState[0] === 'message-you' ? 'message' : 'message message_reverse';
//   let imgSrc = props.messageState[0] === 'message-you' ? props.avatarSrc : props.personPhoto;
//   return (
//     <div className={messageStyle}>
//       <img src={imgSrc} alt="" className={photoStyle} />
//       <p className={style}>{message}</p>
//     </div>
//   );
// };

export default Message;
