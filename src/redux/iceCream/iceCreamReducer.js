import {BUY_ICECREAM} from './iceCreamTypes'

const initalState = {
    numOfIceCream : 15
}

 const iceCreamReducer = (state = initalState, action) => {
    console.log("action",action)
    switch(action.type){
        case BUY_ICECREAM:
             return{
            ...state,
            numOfIceCream: state?.numOfIceCream - action.payload
        }
        default : return state
    }
}

export default iceCreamReducer