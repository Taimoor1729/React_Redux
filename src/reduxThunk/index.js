import {applyMiddleware  , legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initalState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (user) => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}
const fetchUserFailure = (error) => {
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer= (state = initalState, action) =>{
    switch(action.type){
        case FETCH_USER_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return{
            ...state,
            loading: false,
            data: action.payload
        }
        case FETCH_USER_FAILURE: return{
            ...state,
            loading: false,
            error:action.payload
        }

        default: return state
    }
}

const fetchUser = () => {
    return function (dispatch){
         dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(responce => {
            //Success responce
            const user = responce.data
            dispatch(fetchUserSuccess(user))
        })
        .catch(error => {
            // failure responce
            dispatch(fetchUserFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {console.log("redux thunk",store.getState())})
store.dispatch(fetchUser())