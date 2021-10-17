import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import SettingsIcon from './SettingsIcon';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Logo />
        <SearchBar />
        <SettingsIcon />
      </div>
    </header>
  );
};

export default Header;
