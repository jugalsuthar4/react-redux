import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer/root';
import logger from "redux-logger";
const store=createStore(rootReducer,applyMiddleware(logger) as any);

export default store;