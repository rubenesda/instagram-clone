import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './Context/firebase';
import { FieldValue, firebase } from './Lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
