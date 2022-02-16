import React from 'react';
import User from './User';
import Preloader from '../../common/Preloader';

const Users = (props) => {
  let pagesCounter = Math.ceil(props.totalUsersCount / props.usersPerPage);
  let pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(
      <span
        className={props.currentPage === i ? 'current-page page' : 'page'}
        key={i}
        onClick={props.onPageChange}
      >
        {i}
      </span>
    );
  }
  return (
    <div>
      {pages}
      {props.isFetching ? (
        <Preloader />
      ) : (
        props.usersData.users.map((user) => {
          return (
            <User
              user={user}
              key={user.id}
              toggleFollow={props.toggleFollow}
              toggleIsFollowedProcessed={props.toggleIsFollowedProcessed}
              followingProcess={props.followingProcess}
            />
          );
        })
      )}
    </div>
  );
};

// const Users = (props) => {

//   if (!props.usersData.users.length ) {
//     instance.get('users').then(response=>{
//       props.setUsers(response.data.items);
//     });
//   }
//   return (
//     <div>
//       {props.usersData.users.map((user) => {
//         return <User user={user} key={user.id} toggleFollow={props.toggleFollow} />;
//       })}
//     </div>
//   );
// };

export default Users;
