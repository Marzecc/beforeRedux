import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Stats from './Components/Stats';
import Dice from './Components/Dice';


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Stats />, document.getElementById('stats'));
// ReactDOM.render(<Dice />, document.getElementById('dice'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
