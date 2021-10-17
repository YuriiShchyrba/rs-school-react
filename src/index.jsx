import store from './redux/redux-store';
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export let rerenderEntireTree = () => {
  ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('app'),
  );
};

// store.subscribe(() => {
//   rerenderEntireTree();
// });

// store.subscribe(rerenderEntireTree);

rerenderEntireTree();
