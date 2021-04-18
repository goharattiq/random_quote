import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {quoteReducer} from './quote/reducer';

const initialState = {};

const middleware = [thunk];

const redux_compose  =  window.__REDUX_DEVTOOLS_EXTENSION__ ? 
                          compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__()) : 
                          applyMiddleware(...middleware);

const store = createStore(
    quoteReducer,
  initialState,
  redux_compose
);


export default store;