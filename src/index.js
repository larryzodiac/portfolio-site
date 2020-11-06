import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import p5 from 'p5';
// Sketches
import s01 from './sketch'
new p5(s01,'s01');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);