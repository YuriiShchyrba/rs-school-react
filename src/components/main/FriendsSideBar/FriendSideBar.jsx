import React from 'react';

class FriendSideBar extends React.Component{

  render(){
    return (
      <div className="friend-side-bar">
        <img src={this.props.personPhoto} alt='' className='friend-side-bar__photo'/>
        <p className='friend-side-bar__name'>{this.props.name}</p>
      </div>
    );
  }
}


// const FriendSideBar = (props) => {
//   return (
//     <div className="friend-side-bar">
//       <img src={props.personPhoto} alt='' className='friend-side-bar__photo'/>
//       <p className='friend-side-bar__name'>{props.name}</p>
//     </div>
//   );
// };

export default FriendSideBar;
