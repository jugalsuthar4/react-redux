import { combineReducers } from "redux"
import { cakeReducer } from "./cake"
import { iceCreamReducer } from "./icecream"
import { userReducer } from "./user";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})
export default rootReducer;