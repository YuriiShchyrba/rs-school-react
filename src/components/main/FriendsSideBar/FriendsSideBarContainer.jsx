import { connect } from 'react-redux';
import FriendsSideBar from './FriendsSideBar';

let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsSideBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsSideBar);

export default FriendsSideBarContainer;

// const FriendsSideBarContainer = (props) => {
//   let state = props.store.getState();
//   let friendsData = state.friendsData;
//   return <FriendsSideBar friendsData={friendsData} />;
// };
