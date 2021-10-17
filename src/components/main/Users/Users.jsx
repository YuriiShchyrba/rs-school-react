import React from 'react';
import User from './User';
import * as axios from 'axios';

// const instance = axios.create({
//   withCredentials: true,
//   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//   headers: {
//     'API-KEY': 'acc7c11b-cfc1-4d83-b8b0-2eee9bfb02bc',
//   },
// });

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.instance = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
        'API-KEY': 'acc7c11b-cfc1-4d83-b8b0-2eee9bfb02bc',
      },
    });
  }

  componentDidMount(){
    this.instance.get('users').then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <div>
        {this.props.usersData.users.map((user) => {
          return <User user={user} key={user.id} toggleFollow={this.props.toggleFollow} />;
        })}
      </div>
    );
  }
}

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
