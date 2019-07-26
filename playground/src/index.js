import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from './store/reducers/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(Reducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
