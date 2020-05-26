import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import userReducer from '../Reducers/reducer';


const combineReducer = combineReducers({
    userStore: userReducer
})

const store = createStore(combineReducer, applyMiddleware(ReduxThunk));

export default store;