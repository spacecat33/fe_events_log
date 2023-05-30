import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //should it be configureStore?
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import eventsReducer from './reducers/eventsReducer';

const store = createStore(eventsReducer, applyMiddleware(thunk))

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
