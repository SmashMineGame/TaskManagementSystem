import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

const initState = {}

const middleWare = [thunk];

const store = createStore(rootReducer, initState, applyMiddleware(...middleWare));

export default store;