import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//switch uses most specific route that matches, top down.

// this was from the starter files 

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));


const application = (
    <Provider store={createStoreWithMiddleware(reducers)}>
       <App />
    </Provider>
 )
 
 ReactDOM.render(application, document.getElementById('root'));
