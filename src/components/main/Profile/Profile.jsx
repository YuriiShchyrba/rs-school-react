import React from 'react';
import Avatar from './Avatar';
import Name from './Name';
import PersonalInfo from './PersonalInfo';
import PostsContainer from '../Posts/PostsContainer';
import FriendsSideBarContainer from '../FriendsSideBar/FriendsSideBarContainer';
import ProfileStatus from './ProfileStatusHook';

class Profile extends React.Component{
  render(){
    let name = this.props.profileData.name;
    let photoSrc = this.props.profileData.avatarSrc;
    let personalInfo = this.props.profileData.personalInfo;
    let profile = this.props.profileData.profile;
    let lookingForJob;
    let description;
    let contacts ;


    if(profile) {
      name = profile.fullName;
      photoSrc = profile.photos.large;
      lookingForJob = profile.lookingForAJob;
      description = profile.lookingForAJobDescription;
      contacts = profile.contacts;
    }
    // console.log(contacts);
    return (
      <div>
        <Name name={name} />
        <ProfileStatus status ={this.props.status} updateUserStatus ={this.props.updateUserStatus} />
        <div className="main-page__info">
          <Avatar avatarSrc={photoSrc} />
          <PersonalInfo personalInfo={personalInfo}
          lookingForJob = {lookingForJob}
          description = {description}
          contacts = {contacts}
          />
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
