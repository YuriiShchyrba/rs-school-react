import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

let mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;

// const ProfileContainer = (props) => {
//   let state = props.store.getState();
//   let profileData = state.profileData;
//   return (
//    <Profile profileData = {profileData} store = {props.store} />
//   );
// };