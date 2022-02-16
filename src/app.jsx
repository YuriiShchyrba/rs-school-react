import React from 'react';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './style.css';
import HeaderContainer from './components/header/HeaderContainer';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
