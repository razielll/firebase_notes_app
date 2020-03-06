import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: "evernote-clone-1d191.firebaseapp.com",
    databaseURL: "https://evernote-clone-1d191.firebaseio.com",
    projectId: "evernote-clone-1d191",
    storageBucket: "evernote-clone-1d191.appspot.com",
    messagingSenderId: "583268403103",
    appId: "1:583268403103:web:8ee414ad07764ff9695faa"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
