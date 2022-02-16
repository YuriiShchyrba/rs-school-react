import { connect } from 'react-redux';
import React from 'react';
import {
  toggleFollow,
  setCurrentPage,
  getUsers
} from '../../../redux/users-reducer';
import Users from './Users';
import { compose } from 'redux';
import { getCurrentPage, getFollowingProcess, getIsFetching, getTotalUsersCount, getUsersData, getUsersDataSuper, getUsersPerPage } from '../../../redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.usersPerPage);
  }

  onPageChange = (e) => {
    let currentPage = +e.target.innerHTML;
    // this.props.setCurrentPage(currentPage);
    this.props.getUsers(currentPage,this.props.usersPerPage);
  };

  render() {
    console.log('Rerender');
    // console.log(this.props.totalUsersCount);
    return (
      <Users
        onPageChange={this.onPageChange}
        {...this.props}
      />
    );
  }
}

let mapStateToProps = (state) => {
  console.log('Map state to props in user')
  return {
    usersData: getUsersDataSuper(state),
    // usersData: getUsersData(state),
    totalUsersCount: getTotalUsersCount(state),
    usersPerPage: getUsersPerPage(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProcess : getFollowingProcess(state),
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollow: (usersID) => {
//       let action = toggleFollowActionCreator(usersID);
//       dispatch(action);
//     },
//     setUsers: (users) => {
//       let action = setUsersActionCreator(users);
//       dispatch(action);
//     },
//     getTotalUsersCount: (totalUsersCount) => {
//       let action = getTotalUsersCountActionCreator(totalUsersCount);
//       dispatch(action);
//     },
//     setCurrentPage: (currentPage) => {
//       let action = setCurrentPageActionCreator(currentPage);
//       dispatch(action);
//     },
//     toggleIsFetching: (isFetching) => {
//       let action = toggleIsFetchingActionCreator(isFetching);
//       dispatch(action);
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, {toggleFollow,setCurrentPage,getUsers})
)(UsersContainer);
