import React from 'react';
import './style.css';
import SearchBar from './components/search_bar';
import Card from './components/card/card';

const App = (props) => {
  const arr = props.state.cards;
  return (
    <div>
      <SearchBar />
      <ul className="cards_list">
        <li>
          <Card cardInfo={arr[0]} />
        </li>
        <li>
          <Card cardInfo={arr[1]} />
        </li>
        <li>
          <Card cardInfo={arr[2]} />
        </li>
        <li>
          <Card cardInfo={arr[3]} />
        </li>
        <li>
          <Card cardInfo={arr[4]} />
        </li>
        <li>
          <Card cardInfo={arr[5]} />
        </li>
        <li>
          <Card cardInfo={arr[6]} />
        </li>
        <li>
          <Card cardInfo={arr[7]} />
        </li>
        <li>
          <Card cardInfo={arr[8]} />
        </li>
        <li>
          <Card cardInfo={arr[9]} />
        </li>
      </ul>
    </div>
  );
};

export default App;
