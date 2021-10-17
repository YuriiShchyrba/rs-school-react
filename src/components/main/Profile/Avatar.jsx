import React from 'react';

class Avatar extends React.Component{

  render(){
    return (
      <div className="avatar-wrapper">
        <img className="avatar__photo" src={this.props.avatarSrc} alt="" />
        <p className="avatar__edit">Edit</p>
      </div>
    );
  }
}

// const Avatar = (props) => {
//   return (
//     <div className="avatar-wrapper">
//       <img className="avatar__photo" src={props.avatarSrc} alt="" />
//       <p className="avatar__edit">Edit</p>
//     </div>
//   );
// };

export default Avatar;
