import { combineReducers } from "redux"
import { cakeReducer } from "./cake"
import { iceCreamReducer } from "./icecream"

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
export default rootReducer;