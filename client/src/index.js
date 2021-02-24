import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import  {Provider} from 'react-redux'
// import {createStore , combineReducers , compose , applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'

// individual reducers
import authReducer from './reducers/authReducer'
import contactsReducer from './reducers/contactsReducer'

// root reducer
// const rootReducer = combineReducers({
//   auth : authReducer,
//   //contacts : contactsReducer
// })

// create the store and pass reducer in it -> pass the combined reducer
// reducer return a state object, whiile conbinedreducer return a reducer
//const store = createStore(rootReducer , applyMiddleware(thunk))


// rendering part
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
