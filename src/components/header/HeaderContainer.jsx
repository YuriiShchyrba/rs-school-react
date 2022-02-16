import React from 'react';
import { connect } from 'react-redux';
import {logoutUser} from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component{
  render(){
    return <Header {...this.props}/>
  }

}

let mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps,{logoutUser})(HeaderContainer);
