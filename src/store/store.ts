import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/root';
import logger from "redux-logger";
import { thunk } from 'redux-thunk';
const store=createStore(rootReducer,applyMiddleware(thunk) as any);

export default store;