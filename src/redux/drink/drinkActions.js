import { BUY_DRINK } from './drinkTypes'

 export const buyDrink = (number = 2) => {
    console.log("some drink action ")
    return{
        type: BUY_DRINK,
        payload: number
    }
}