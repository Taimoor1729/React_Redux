import { combineReducers } from "redux";
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import drinkReducer from './drink/drinkReducer'
import userReducer from "./user/userReducer";

const rootRedcuer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    drink: drinkReducer,
    user: userReducer
})

export default rootRedcuer