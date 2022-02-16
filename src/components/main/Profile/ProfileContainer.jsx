import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setProfile, getUserStatus, updateUserStatus} from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

  componentDidMount () {
    let userID = this.props.match.params.userID;
    if(!userID){
      userID = this.props.userID;
      if(!userID) {
        this.props.history.push('/users');
      }
    }
    this.props.setProfile(userID);
    this.props.getUserStatus(userID);
  }

  render(){
    return <Profile profileData ={this.props.profileData} status ={this.props.status} updateUserStatus ={this.props.updateUserStatus}/>
  }

}

let mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
    status: state.profileData.status,
    userID: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps,{setProfile, getUserStatus, updateUserStatus}),
  withRouter
)(ProfileContainer);

// const ProfileContainer = (props) => {
//   let state = props.store.getState();
//   let profileData = state.profileData;
//   return (
//    <Profile profileData = {profileData} store = {props.store} />
//   );
// };