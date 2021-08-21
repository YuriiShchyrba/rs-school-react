import React from 'react';
import '../style.css';

const SearchBar = () => (
  <div className="search_bar__wrapper">
    <form className="search_bar">
      <img className="search_bar__icon" src="./assets/search.svg" alt="" />
      <input className="search_bar__input" type="search" />
      <button className="search_bar__btn" type="submit">
        Search
      </button>
    </form>
  </div>
);

export default SearchBar;
