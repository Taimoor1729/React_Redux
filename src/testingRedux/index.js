// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
// import { createLogger } from 'redux-logger'


// const BUY_CAKE = 'Buy_Cake'
// const BUY_ICECREAM = 'BUY_ICECREAM'
// const logger = createLogger({

// });

// function buyCake(){
//     return{
//         type:BUY_CAKE,
//         info: 'first redux action'
//     }
// }
// function buyIceCream() {
//     return{
//         type:BUY_ICECREAM,
//         info: 'second redux action'
//     }
// }

// // const initialState = {
// //     numOfCakes:10,
// //     numOfCream:20
// // }

// const  initalCake = {
//     numOfCakes:10
// }
// const initalIceCream = {
//     numOfIceCream:20
// }

// // const reducer = (state = initialState, action ) => {
// //     switch(action.type){
// //         case BUY_CAKE: return{
// //             ...state,
// //             numOfCakes: state.numOfCakes - 1
// //         }
// //         case BUY_ICECREAM: return{
// //             ...state,
// //             numOfCream: state.numOfCream - 1
// //         }
// //         default: return state
// //     }
// // }



// const reducerForCake = (state = initalCake, action) => {
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         default: return state
//     }
// }
// const reducerForIceCream = (state= initalIceCream, action) => {
//     switch(action.type){
//       case BUY_ICECREAM: return{
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1
//       }
//         default: return state
//     }
// }
// const rootReducer = combineReducers({
//     cake: reducerForCake,
//     iceCream: reducerForIceCream
// })
// const store = createStore(rootReducer, applyMiddleware(logger))

// console.log("inital state", store.getState())
// const unSubscribe = store.subscribe(() => {})
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unSubscribe()