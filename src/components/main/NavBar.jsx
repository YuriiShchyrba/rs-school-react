import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li className="menu__item item">
          <NavLink to="/profile" activeClassName="link_active" className="menu__link link">
            My page
          </NavLink>
        </li>
        <li className="menu__item item">
          <NavLink to="/friends" activeClassName="link_active" className="menu__link link">
            {' '}
            Friends
          </NavLink>
        </li>
        <li className="menu__item item">
          <NavLink to="/news" activeClassName="link_active" className="menu__link link">
            News
          </NavLink>
        </li>
        <li className="menu__item item">
          <NavLink to="/users" activeClassName="link_active" className="menu__link link">
            Users
          </NavLink>
        </li>
        <li className="menu__item item">
          <NavLink to="/messages" activeClassName="link_active" className="menu__link link">
            Messages
          </NavLink>
        </li>
        <li className="menu__item item">
          <NavLink to="/audios" activeClassName="link_active" className="menu__link link">
            Audios
          </NavLink>
        </li>
        <li className="menu__item item">
          <NavLink to="/video" activeClassName="link_active" className="menu__link link">
            Video
          </NavLink>
        </li>
        <li className="menu__item item">
          <NavLink to="/settings" activeClassName="link_active" className="menu__link link">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
