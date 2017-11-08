import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
//import themoviedb from "./lib/themoviedb.js"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
