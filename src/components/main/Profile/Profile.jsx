import React from 'react';
import Avatar from './Avatar';
import Name from './Name';
import PersonalInfo from './PersonalInfo';
import PostsContainer from '../Posts/PostsContainer';
import FriendsSideBarContainer from '../FriendsSideBar/FriendsSideBarContainer';

class Profile extends React.Component{

  render(){
    return (
      <div>
        <Name name={this.props.profileData.name} />
        <div className="main-page__info">
          <Avatar avatarSrc={this.props.profileData.avatarSrc} />
          <PersonalInfo personalInfo={this.props.profileData.personalInfo} />
        </div>
        <div className="main-page__content-wrapper">
          <FriendsSideBarContainer />
          <PostsContainer />
        </div>
      </div>
    );
  }

}


// const Profile = (props) => {
//   return (
//     <div>
//       <Name name={props.profileData.name} />
//       <div className="main-page__info">
//         <Avatar avatarSrc={props.profileData.avatarSrc} />
//         <PersonalInfo personalInfo={props.profileData.personalInfo} />
//       </div>
//       <div className="main-page__content-wrapper">
//         <FriendsSideBarContainer />
//         <PostsContainer />
//       </div>
//     </div>
//   );
// };

export default Profile;
