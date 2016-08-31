import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
};

function ready(fn) {
 if (document.readyState != 'loading'){
   fn();
 } else {
   document.addEventListener('DOMContentLoaded', fn);
 }
};

ready(render);
