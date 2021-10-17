import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={classes.search_bar}>
      <img className={classes.search_bar__icon} src="../../assets/search.svg" alt="" />
      <input className={classes.search_bar__input} type="search" />
      <button className={classes.search_bar__btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
