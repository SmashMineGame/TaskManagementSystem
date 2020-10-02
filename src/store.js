import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

const middleWare = [thunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middleWare));
export default store;