import { BUY_ICECREAM } from './iceCreamTypes'

export  const buyIceCream = (number = 1) => {
    console.log(" buyIceCream function ");
    return{
        type: BUY_ICECREAM,
        payload: number
    }
}
