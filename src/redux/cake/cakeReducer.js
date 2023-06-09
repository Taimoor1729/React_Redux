import { BUY_CAKE } from './cakeTypes'

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  console.log("action in reducer", action)  
  switch (action.type) {
    case BUY_CAKE:
    return {
      ...state,
      numOfCakes:state.numOfCakes - action.payload  
    }

    default: return state
  }
}

export default cakeReducer