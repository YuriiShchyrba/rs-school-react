import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/user.png';
class User extends React.Component {
  onToggleFollow = (user) => {
    this.props.toggleFollow(user);
  };

  render() {
    return (
      <div>
        <div>
          <NavLink to={'/profile/' + this.props.user.id}>
            <img src={this.props.user.photoSrc ? this.props.user.photoSrc : userPhoto} alt="" />
          </NavLink>
          {this.props.user.followed ? (
            <button
              disabled={this.props.followingProcess.some((id) => this.props.user.id == id)}
              onClick={() => {
                this.onToggleFollow(this.props.user);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={this.props.followingProcess.some((id) => this.props.user.id == id)}
              onClick={() => {
                this.onToggleFollow(this.props.user);
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div>
          <h5>{this.props.user.name}</h5>
          <p>{this.props.user.status}</p>
          <h5>{this.props.user.id}</h5>
          {/* <h5>{props.user.location.city},</h5>
          <h5>{props.user.location.country}</h5> */}
        </div>
      </div>
    );
  }
}

// const User = (props) => {
//   let onToggleFollow = () => {
//     props.toggleFollow(props.user.id);
//   };
//   return (
//     <div>
//       <div>
//         <img src={props.user.photoSrc ? props.user.photoSrc : userPhoto} alt="" />
//         {props.user.follow ? (
//           <button onClick={onToggleFollow}>Unfollow</button>
//         ) : (
//           <button onClick={onToggleFollow}>Follow</button>
//         )}
//       </div>
//       <div>
//         <h5>{props.user.name}</h5>
//         <p>{props.user.status}</p>
//         <h5>{props.user.id}</h5>
//         {/* <h5>{props.user.location.city},</h5>
//         <h5>{props.user.location.country}</h5> */}
//       </div>
//     </div>
//   );
// };

export default User;
