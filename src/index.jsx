import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import state from './state';

ReactDom.render(<App state={state} />, document.getElementById('app'));
