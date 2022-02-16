import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import SearchBar from './SearchBar';
import SettingsIcon from './SettingsIcon';

const Header = (props) => {

  let onLogout =() =>{
   props.logoutUser();
  }

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Logo />
        <SearchBar />
        <SettingsIcon />
        {props.auth.isLogged ? props.auth.login : <NavLink to='/login' className='login'>Login</NavLink> }
        {props.auth.isLogged ? <button onClick={onLogout}>logout</button> : <div></div> }

      </div>
    </header>
  );
};

export default Header;
