import {createStore} from 'redux';
import { cakeReducer } from '../reducer/cake';


const store=createStore(cakeReducer);

export default store;