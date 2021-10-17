import React from 'react';
import FriendSideBar from './FriendSideBar';

class FriendsSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.friends = props.friendsData.friends;
    this.sixMostContacted = [];
    this.counter = 0;
  }

  render() {
    while (this.counter < 6) {
      if (!this.friends[this.counter]) break;
      this.sixMostContacted.push(
        <FriendSideBar
          key={this.friends[this.counter].id}
          name={this.friends[this.counter].name}
          personPhoto={this.friends[this.counter].personPhoto}
        />,
      );
      this.counter++;
    }
    return (
      <div className="main-page__friends">
        <h3 className="friends-side-bar__header">Friends</h3>
        <div className="friends-side-bar__most-visited">{this.sixMostContacted}</div>
      </div>
    );
  }
}

// const FriendsSideBar = (props) => {
//   let friends = props.friendsData.friends;
//   let sixMostContacted = [];
//   let counter = 0;
//   while (counter < 6) {
//     if (!friends[counter]) break;
//     sixMostContacted.push(
//       <FriendSideBar
//         key={friends[counter].id}
//         name={friends[counter].name}
//         personPhoto={friends[counter].personPhoto}
//       />,
//     );
//     counter++;
//   }
//   return (
//     <div className="main-page__friends">
//       <h3 className="friends-side-bar__header">Friends</h3>
//       <div className="friends-side-bar__most-visited">{sixMostContacted}</div>
//     </div>
//   );
// };

export default FriendsSideBar;
