import { BUY_DRINK } from './drinkTypes'

const initialState = {
    numOfDrinks : 20
}
const drinkReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_DRINK: 
        return{
            ...state,
            numOfDrinks: state.numOfDrinks - action.payload
        }
        default: return state
    }
}

export default drinkReducer
