import axios from 'axios'
import{
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
} from './userTypes'

export const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserFailure = (error) => {
    return{
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUser = () => {

    return    (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((responce) => {
            const user = responce.data 
            dispatch(fetchUserSuccess(user))})
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
        }
}