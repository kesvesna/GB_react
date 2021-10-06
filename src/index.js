import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

const messageProps = 'Hello React!';

ReactDOM.render(
  <React.StrictMode>
    <App message={messageProps}/>
  </React.StrictMode>,
  document.getElementById('root')
);

