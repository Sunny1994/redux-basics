import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from '@reduxjs/toolkit';
import allReducers from './reducers';
import { Provider } from 'react-redux';




const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=> console.log(store.getState()))
//dispatch your type from the store which is the centralized one and the type is just
//a function which returns a type and a name to it and once this is dispatched, the reducer
//will look at what type is dispatched and based on the state, it returns a state
// store.dispatch(increment())
// store.dispatch(decrement())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
